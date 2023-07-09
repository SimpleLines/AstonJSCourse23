const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

const getPosts = async () => {
  const data = await fetchPosts();
  let currentPage = 1;
  let quantityPostPerPages = 10;

  const showPosts = (array, limit, page) => {
    const posts = document.querySelector('.posts');
    posts.innerHTML = '';
    page--;
    const start = limit * page;
    const end = start + limit;
    const dataPerPage = array.slice(start, end);

    for (let key in dataPerPage) {
      posts.innerHTML += `
            <div class="post">
                <p>${dataPerPage[key].id}</p>
                <h2>${dataPerPage[key].title}</h2>
                <p>${dataPerPage[key].body}</p>
                <p>${dataPerPage[key].userId}</p>
            </div>
            `;
    }
  };

  const showPagination = (array, limit) => {
    const pagination = document.querySelector('.pagination');
    const pageCount = array.length / limit;

    for (let i = 0; i < pageCount; i++) {
      const button = document.createElement('button');
      button.classList.add('pagination-button');
      button.innerHTML = i + 1;
      button.addEventListener('click', () => {
        currentPage = i + 1;
        showPosts(data, quantityPostPerPages, currentPage);
      });
      pagination.appendChild(button);
    }
  };
  showPosts(data, quantityPostPerPages, currentPage);
  showPagination(data, quantityPostPerPages);
};