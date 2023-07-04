class PostsList {
  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor({ page, limit }) {
    this.posts;
    this.total;
    this.page = page;
    this.limit = limit;
  }

  async getPosts() {
    const response = await fetch(`${this.URL}?_limit=${this.limit}&_page=${this.page}`);
    this.posts = await response.json();
    this.total = (await new Map(response.headers).get('x-total-count')) || null;
  }

  async render() {
    await this.getPosts(this.url);
    const postsHTML = this.posts.map((post) => new PostItem(post).render());
    this.$el = document.createElement('ul');
    this.$el.className = 'posts__list';
    this.$el.insertAdjacentHTML('afterbegin', postsHTML.join(''));
    return this.$el;
  }
}

class PostItem {
  constructor({ id, body, title }) {
    this.id = id;
    this.body = body;
    this.title = title;
  }

  render() {
    return `<li class='post-item'>
        <div class='post-item__content'>
          <h3 class='post-item__title'>${this.title}</h3>
          <p class='post-item__body'>${this.body}</p>
          <div>Post #${this.id}</div>
        </div>
      </li>`;
  }
}

class Paginator {
  constructor({ pages, page = 1 }) {
    this.pages = pages;
    this.active = page;
  }

  renderButton(page) {
    const btn = document.createElement('a');
    btn.className = 'paginate__btn';
    btn.innerText = page;

    if (this.active === page) {
      btn.className += ' paginate__btn_active';
    } else {
      btn.addEventListener('click', () => {
        this.rerenderPosts(page);
      });
    }

    return btn;
  }

  render() {
    const $btns = Array(this.pages)
      .fill('')
      .map((_, index) => this.renderButton(index + 1));

    this.$el = document.createElement('nav');
    this.$el.className = 'paginate';
    this.$el.append(...$btns);

    return this.$el;
  }

  rerenderPosts(page) {
    rerender(page);
  }
}

class App {
  #posts;
  #paginator;

  constructor(limit) {
    this.$el = document.querySelector('#app');
    this.$elements = [];
    this.limit = limit;
  }

  async run(page) {
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

const app = new App(44);

function run() {
  app.run();
}

function rerender(page) {
  app.clear();
  app.run(page);
}

run(1);
