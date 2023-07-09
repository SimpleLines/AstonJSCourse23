const URL = 'https://jsonplaceholder.typicode.com/posts';
const $content = document.querySelector('.content');
const $paginationList = document.querySelector('.pagination');
let limitPostsPerPage = 10; 
let currentPage = 1;
let countPages = null;

async function getPosts(url, limitPostsPerPage, page) {
  const response = await fetch(`${url}?_limit=${limitPostsPerPage}&_page=${page}`);
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
    data,
    total: headers.get('x-total-count') || null,
  };
};

function createLayoutCard(post) {
  return  `<div class='card'>
            <div class='card-body'>
                <h5 class='card-title'>${post.title}</h5>
                <p class='card-text'>${post.body}</p>
            </div>
          </div>`
};

function renderCards(posts) {
  $content.innerHTML = '';
  posts.map((post) => {
    $content.insertAdjacentHTML('afterbegin', createLayoutCard(post));
  });
};

function createElemPagination(tag, text) {
  const $elem = document.createElement(tag);
  $elem.classList.add('page-item', 'page-link');
  $elem.textContent = `${text}`;
  return $elem;
};

const $btnPrev = createElemPagination('button', 'Предыдущая');
const $btnNext = createElemPagination('button', 'Следующая');

const handlePageButtonsStatus = () => {
  currentPage === 1 ? $btnPrev.disabled = true : $btnPrev.disabled = false;
  countPages === currentPage ? $btnNext.disabled = true : $btnNext.disabled = false;
};

function renderPagination() {
  $paginationList.innerHTML = '';
  $paginationList.append($btnPrev);

  for (let i = 1; i <= countPages; i++) {
    if (i === 1 || (i >= currentPage - 1 && i <= currentPage + 1) || i === countPages){
      $paginationList.append(createElemPagination('li', i));
    } else {
      const dots = createElemPagination('button', '...');
      dots.disabled = true;
      $paginationList.append(dots);
    };
  };
  $paginationList.append($btnNext);
  $paginationList.childNodes[currentPage].classList.add('active');

  if (currentPage < 4) {
    $paginationList.childNodes.forEach((elem, i) => {
      if (i === countPages - 1) return;
      if (elem.textContent === '...'){
        elem.classList.add('d-none');
      };
    }); 
  };

  if (currentPage >= 4) {
    $paginationList.childNodes.forEach((elem, i) => {
      if (i === 2) return;
      if (i === countPages - 1) return;
      if (elem.textContent === '...'){
        elem.classList.add('d-none');
      };
    });  
  };
};

async function main() {
  const { data: posts, total } = await getPosts(URL, limitPostsPerPage, currentPage);
  countPages = Math.ceil(total / limitPostsPerPage);
  if (!posts.length) { 
    return $content.innerHTML = '<p>No posts...<p>'; 
  };
  renderCards(posts);
  handlePageButtonsStatus();
  renderPagination();
};
main();

$paginationList.addEventListener('click', (e) => {
  if (e.target.textContent === 'Предыдущая') {
    currentPage -= 1;
    main();
  } else if (e.target.textContent === 'Следующая') {
    currentPage += 1;
    main();
  } else {
    currentPage = +e.target.textContent;
    main();
  };
});