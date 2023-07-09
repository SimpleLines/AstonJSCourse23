import { rerender } from '../index.js';

export class Paginator {
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
