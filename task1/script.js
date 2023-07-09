const URL = 'https://jsonplaceholder.typicode.com/posts';
const limit = 10;
let pageCurrent = 1;
let totalPosts = 0;
const postsEl = document.querySelector('.posts');
const paginationDiv = document.querySelector('.pagination');

async function getPosts() {
  try {
    const response = await fetch(`${URL}?_limit=${limit}&_page=${pageCurrent}`);
    if (!response.ok) throw new Error(response.statusText);
    const posts = await response.json();
    const headers = new Map(response.headers);
    totalPosts = headers.get('x-total-count');

    displayPosts(posts);
    displayPagination();
  } catch (err) {
    console.error(err.message || err);
  }
}

function displayPosts(posts) {
  postsEl.innerHTML = '';
  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <h3>${post.id}. ${post.title}</h3>`;
    postsEl.appendChild(postEl);
  });
}

function displayPagination() {
  const countPages = Math.ceil(totalPosts / limit);
  paginationDiv.innerHTML = '';
  for (let i = 1; i <= countPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.classList.add('pagination-el');
    link.textContent = i;

    if (pageCurrent == i) link.classList.add('pagination-item-active');

    link.addEventListener('click', () => {
      pageCurrent = i;
      getPosts();
    });

    paginationDiv.appendChild(link);
  }
}

getPosts();
