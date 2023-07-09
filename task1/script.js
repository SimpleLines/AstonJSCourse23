const postsContainer = document.querySelector('.posts');
const paginationList = document.querySelector('.pagination__list');
const nextBtn = document.querySelector('.pagination__next');
const prevBtn = document.querySelector('.pagination__prev');
let totalCount;
let currentPage = 1;

const getPosts = async (url) => {
  const response = await fetch(url);
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
      data,
      total: headers.get('x-total-count') || null
  };
};

async function init() {
  await displayPosts();
  displayPagination(10, totalCount);
}

init();

async function displayPosts(limit = 10, page = 1) {
  const posts = await getPosts(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  postsContainer.innerHTML = '';
  totalCount = posts.total;
  posts.data.forEach((el) => {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerText = `${el.id}) ${el.title}`;
    postsContainer.appendChild(post);
  })
}

function displayPagination(limit, total) {
  const pageCount = total / limit;
  for(let i = 0; i < pageCount; i++) {
    const li = createPaginationItem(i + 1);
    paginationList.appendChild(li);
  }

  paginationList.addEventListener('click', (e) => {
    if(e.target.classList.contains('pagination__list')) {
      return false;
    }
    currentPage = Number(e.target.innerHTML);
    displayPosts(10, currentPage);
    const currentLi = document.querySelector('li.pagination__item--active');
    currentLi.classList.remove('pagination__item--active');
    e.target.classList.add('pagination__item--active');
  })
}

function createPaginationItem(page) {
  const li = document.createElement('li');
  li.classList.add('pagination__item');
  li.innerText = page;

  if(currentPage === page) {
    li.classList.add('pagination__item--active');
  }

  return li;
}

function handleClick(e) {
  if(e.target.classList.contains('pagination__next') && currentPage < totalCount / 10) {
    const currentLi = document.querySelector('li.pagination__item--active');
    currentLi.classList.remove('pagination__item--active');
    currentPage = currentPage + 1;
    displayPosts(10, currentPage);
    currentLi.nextElementSibling.classList.add('pagination__item--active');
  }
  if(e.target.classList.contains('pagination__prev') && currentPage > 1) {
    const currentLi = document.querySelector('li.pagination__item--active');
    currentLi.classList.remove('pagination__item--active');
    currentPage = currentPage - 1;
    displayPosts(10, currentPage);
    currentLi.previousElementSibling.classList.add('pagination__item--active');
  }
}

nextBtn.addEventListener('click', handleClick);
prevBtn.addEventListener('click', handleClick);