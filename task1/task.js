async function getPosts(_page, _limit) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${_page}&_limit=${_limit}`);
  const totalCount = response.headers.get('x-total-count');
  const data = await response.json();
  return {
    totalCount: totalCount,
    data: data
  };
}

function displayList(data) {
  const listEl = document.querySelector('.list');
  listEl.innerHTML = '';
  data.forEach((item) => {
    const liEl = document.createElement('li');
    liEl.innerText = item.title;
    listEl.appendChild(liEl);
  });
}

function displayPagination(currentPage, totalPages) {
  const paginationEl = document.querySelector('.pagination');
  paginationEl.innerHTML = '';
  const prevEl = document.createElement('button');
  prevEl.innerText = 'Предыдущая';
  prevEl.disabled = currentPage == 1;
  prevEl.addEventListener('click', () => {
    if (currentPage > 1) {
      displayPage(currentPage - 1);
    }
  });
  paginationEl.appendChild(prevEl);
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let i = start; i <= end; i++) {
    const pageEl = document.createElement('button');
    pageEl.innerText = i;
    pageEl.disabled = i == currentPage;
    pageEl.addEventListener('click', () => {
      if (i != currentPage) {
        displayPage(i);
      }
    });
    paginationEl.appendChild(pageEl);
  }
  const nextEl = document.createElement('button');
  nextEl.innerText = 'Следующая';
  nextEl.disabled = currentPage == totalPages;
  nextEl.addEventListener('click', () => {
    if (currentPage < totalPages) {
      displayPage(currentPage + 1);
    }
  });
  paginationEl.appendChild(nextEl);
}

async function displayPage(page) {
  const limit = 10;
  const data = await getPosts(page, limit);
  const totalPages = Math.ceil(data.totalCount / limit);
  displayList(data.data);
  displayPagination(page, totalPages);
}

displayPage(1);
