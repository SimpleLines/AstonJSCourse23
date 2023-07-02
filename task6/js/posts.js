import { fetchGetPosts } from './api.js';
import { fetchComments } from './comments.js';
import { renderPosts, renderPagination } from './render.js';

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

export const fetchPosts = (page) => {
  fetchGetPosts({ page }).then((res) => {
    const posts = new Posts(res);
    root.innerHTML = '';
    root.append(posts.getPosts());
  });
};

fetchPosts(1);
