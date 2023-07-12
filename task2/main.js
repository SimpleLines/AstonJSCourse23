const url = "https://jsonplaceholder.typicode.com";
const limit = 10;
let currentPage = 1;
let totalPosts = 100;

function fetchData(page) {
  fetch(`${url}/posts?_limit=${limit}&_page=${page}`)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      displayPosts(posts);
      renderPages();
    })
    .catch((error) => console.log(error));
}

function displayPosts(posts) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  posts.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "post-container";
    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;
    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postContainer.append(postTitle, postBody);
    content.appendChild(postContainer);
  });
}

function renderPages() {
  const pages = document.getElementById("pages");
  pages.innerHTML = "";

  const totalPages = Math.ceil(totalPosts / limit);
  const maxPagesToShow = 4;
  const halfMaxPages = Math.floor(maxPagesToShow / 2);

  let start;
  let end;

  if (totalPages <= maxPagesToShow) {
    start = 1;
    end = totalPages;
  } else if (currentPage <= halfMaxPages) {
    start = 1;
    end = maxPagesToShow;
  } else if (currentPage + halfMaxPages >= totalPages) {
    start = totalPages - maxPagesToShow + 1;
    end = totalPages;
  } else {
    start = currentPage - halfMaxPages;
    end = currentPage + halfMaxPages;
  }

  const prevLink = createPagesLink(currentPage - 1, "предыдущая");
  pages.appendChild(prevLink);

  if (start > 1) {
    const firstLink = createPagesLink(1, "1");
    pages.appendChild(firstLink);

    if (start > 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      pages.appendChild(dots);
    }
  }

  for (let i = start; i <= end; i++) {
    const pageLink = createPagesLink(i, i.toString(), i === currentPage);
    pages.appendChild(pageLink);
  }

  if (end < totalPages) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    pages.appendChild(dots);

    const lastLink = createPagesLink(totalPages, totalPages.toString());
    pages.appendChild(lastLink);
  }

  const nextLink = createPagesLink(currentPage + 1, "следующая");
  pages.appendChild(nextLink);
}
function createPagesLink(page, text, isActive = false) {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = text;

  if (isActive) {
    link.classList.add("active");
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage = page;
    fetchData(currentPage);
  });

  return link;
}

fetchData(currentPage);
