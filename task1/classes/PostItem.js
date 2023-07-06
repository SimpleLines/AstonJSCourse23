import { firstLetterToUpper } from '../core/utils.js';

export class PostItem {
  constructor({ id, body, title }) {
    this.id = id;
    this.body = body;
    this.title = title;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    alert(`Post #${this.id}\n\n${firstLetterToUpper(this.title)}\n\n${firstLetterToUpper(this.body)}`);
  }

  render() {
    this.$el = document.createElement('li');
    this.$el.className = 'post-item';
    this.$el.addEventListener('click', this.handleClick);

    this.$el.insertAdjacentHTML(
      'afterbegin',
      `<div class='post-item__content'>
        <h3 class='post-item__title'>${this.title}</h3>
        <p class='post-item__body'>${this.body}</p>
        <div>Post #${this.id}</div>
      </div>`
    );

    return this.$el;
  }
}
