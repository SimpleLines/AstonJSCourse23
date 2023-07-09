import { Paginator } from './classes/Paginator.js';
import { PostsList } from './classes/PostsList.js';

export class App {
  #posts;
  #paginator;

  constructor({ limit }) {
    this.$el = document.querySelector('#app');
    this.$elements = [];
    this.limit = limit;
  }

  async run({ page }) {
    this.#posts = new PostsList({ page, limit: this.limit });
    const $posts = await this.#posts.render();
    this.$elements.push($posts);

    const pages = Math.ceil(+this.#posts.total / this.#posts.limit);

    this.#paginator = new Paginator({ pages, page });

    const $paginator = this.#paginator.render();
    this.$elements.push($paginator);

    this.$el.prepend(...this.$elements);
  }

  clear() {
    this.$elements.forEach((el) => {
      el.remove();
    });
    this.$elements = [];
  }
}
