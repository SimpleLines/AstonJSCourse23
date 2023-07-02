import { fetchGetComments, fetchGetPosts } from './api.js';
import { renderPosts, renderPagination, renderComments } from './render.js';

const root = document.getElementById('root');

class Posts {
  constructor({ data = [], total = 0, limit, page }) {
    this.posts = document.createElement('div');
    this.postsTitle = document.createElement('h1');
    this.posts.classList.add('posts');
    this.postsTitle.classList.add('posts__title');

    this.postsTitle.textContent = 'Posts';

    this.posts.append(this.postsTitle);

    this.limit = limit;
    this.page = page;
    this.total = total;

    this.renderPosts(data);
    this.renderPagination();
  }

  renderPosts(data) {
    const postsList = renderPosts(data, this.goToPostPage.bind(this));

    this.posts.append(postsList);
  }

  renderPagination() {
    const totalPages = Math.ceil(this.total / this.limit);
    const pagination = renderPagination(
      totalPages,
      this.page,
      this.setPage.bind(this)
    );

    this.posts.append(pagination);
  }

  setPage(page) {
    const urlParams = new URLSearchParams(location.search);
    urlParams.delete('id');
    urlParams.set('page', page);
    history.replaceState({}, '', `${location.pathname}?${urlParams}`);
    fetchPosts(page);
  }

  goToPostPage(post) {
    const urlParams = new URLSearchParams(location.search);
    urlParams.delete('page');
    urlParams.set('id', post.id);
    history.replaceState({}, '', `${location.pathname}?${urlParams}`);
    fetchComments(post);
  }

  getPosts() {
    return this.posts;
  }
}

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

export const fetchPosts = (page) => {
  fetchGetPosts({ page }).then((res) => {
    const posts = new Posts(res);
    root.innerHTML = '';
    root.append(posts.getPosts());
  });
};

fetchPosts(1);
