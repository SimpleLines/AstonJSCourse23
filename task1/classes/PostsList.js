import { POSTS_URL } from '../core/constants.js';
import { PostItem } from './PostItem.js';

export class PostsList {
  url = POSTS_URL;
  posts;
  total;

  constructor({ page, limit }) {
    this.page = page;
    this.limit = limit;
    this.$posts = [];
  }

  async getPosts(url) {
    const response = await fetch(`${url}?_limit=${this.limit}&_page=${this.page}`);
    this.posts = await response.json();
    this.total = (await new Map(response.headers).get('x-total-count')) || null;
  }

  async render() {
    this.$el = document.createElement('ul');
    this.$el.className = 'posts__list';

    await this.getPosts(this.url);
    this.$posts = this.posts.map((post) => new PostItem(post).render());

    this.$el.append(...this.$posts);
    return this.$el;
  }
}
