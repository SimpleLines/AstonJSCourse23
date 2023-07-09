const baseUrl = 'https://jsonplaceholder.typicode.com';
const limit = 10;
let currentPage = 1;
let totalPosts = 0;

async function fetchPosts() {
  try {
    const response = await fetch(
      `${baseUrl}/posts?_limit=${limit}&_page=${currentPage}`
    );
    const posts = await response.json();
    totalPosts = Number(response.headers.get('x-total-count'));
    displayPosts(posts);
    renderPagination();
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayPosts(posts) {
  const postsList = document.getElementById('posts');
  postsList.innerHTML = '';

  posts.forEach((post, index) => {
    const li = document.createElement('li');
    const calculateIndexVal = (pageNum, index) => {
      if (pageNum === 1) {
        return index + 1;
      } else {
        return currentPage * 10 + index + 1;
      }
    };
    li.value = calculateIndexVal(currentPage, index);
    li.textContent = `${post.title} ---> ${post.body}`;
    postsList.appendChild(li);
  });
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(totalPosts / limit);
  const maxPagesToShow = 3;
  const halfMaxPages = Math.floor(maxPagesToShow / 2);

  const start = calculateStartPage(totalPages, maxPagesToShow, halfMaxPages);
  const end = calculateEndPage(totalPages, maxPagesToShow, start);

  if (currentPage !== 1) {
    appendPreviousLink(pagination);
  }

  appendFirstPageLinks(pagination, start);
  appendPageLinks(pagination, start, end);
  appendLastPageLinks(pagination, end, totalPages);

  if (currentPage !== totalPages) {
    appendNextLink(pagination);
  }
}

function calculateStartPage(totalPages, maxPagesToShow, halfMaxPages) {
  if (totalPages <= maxPagesToShow) {
    return 1;
  } else if (currentPage <= halfMaxPages) {
    return 1;
  } else if (currentPage + halfMaxPages >= totalPages) {
    return totalPages - maxPagesToShow + 1;
  } else {
    return currentPage - halfMaxPages;
  }
}

function calculateEndPage(totalPages, maxPagesToShow, start) {
  const end = start + maxPagesToShow - 1;
  return Math.min(end, totalPages);
}

function appendPreviousLink(pagination) {
  const prevLink = createPageLink(currentPage - 1, 'Предыдущая');
  pagination.appendChild(prevLink);
}

function appendFirstPageLinks(pagination, start) {
  if (start > 1) {
    const firstLink = createPageLink(1, '1');
    pagination.appendChild(firstLink);

    if (start > 2) {
      const dots = createDotsElement();
      pagination.appendChild(dots);
    }
  }
}

function appendPageLinks(pagination, start, end) {
  for (let i = start; i <= end; i++) {
    const isActive = i === currentPage;
    const pageLink = createPageLink(i, i.toString(), isActive);
    pagination.appendChild(pageLink);
  }
}

function appendLastPageLinks(pagination, end, totalPages) {
  if (end < totalPages) {
    const dots = createDotsElement();
    pagination.appendChild(dots);

    const lastLink = createPageLink(totalPages, totalPages.toString());
    pagination.appendChild(lastLink);
  }
}

function appendNextLink(pagination) {
  const nextLink = createPageLink(currentPage + 1, 'Следующая');
  pagination.appendChild(nextLink);
}

function createPageLink(page, text, isActive = false) {
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = text;

  if (isActive) {
    link.classList.add('active');
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = page;
    fetchData(currentPage);
  });

  return link;
}

function createDotsElement() {
  const dots = document.createElement('span');
  dots.textContent = '...';
  return dots;
}

function createPageLink(page, text) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = text;
  if (page === currentPage) {
    a.classList.add('active');
  }
  a.addEventListener('click', () => {
    currentPage = page;
    fetchPosts();
  });
  li.appendChild(a);
  return li;
}

fetchPosts();