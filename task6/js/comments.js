import { fetchGetComments } from './api.js';
import { renderComments } from './render.js';

class Comments {
  constructor({ data = [], post }) {
    this.comments = document.createElement('div');
    this.postTitle = document.createElement('h1');
    this.commentsTitle = document.createElement('h2');
    this.postBody = document.createElement('p');

    this.comments.classList.add('comments');
    this.postTitle.classList.add('post__title');
    this.commentsTitle.classList.add('comments__title');
    this.postBody.classList.add('post__body');

    this.postTitle.textContent = post.title;
    this.postBody.textContent = post.body;
    this.commentsTitle.textContent = 'Comments';

    this.comments.append(this.postTitle, this.postBody, this.commentsTitle);

    this.renderComments(data);
  }

  renderComments(data) {
    const commentsList = renderComments(data);

    this.comments.append(commentsList);
  }

  getComments() {
    return this.comments;
  }
}

export const fetchComments = (post) => {
  fetchGetComments(post).then((res) => {
    const comments = new Comments(res);
    root.innerHTML = '';
    root.append(comments.getComments());
  });
};
