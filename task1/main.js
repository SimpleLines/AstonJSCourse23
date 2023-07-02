import getPosts from "./getPosts.js";
const limitNode = document.getElementById("count-posts");
const pages = document.querySelectorAll(".page-item");
const main = document.querySelector(".posts-container");
const last = document.querySelector(".last");
const next = document.querySelector(".next");
const pageNum = document.querySelector(".header-page");

const store = {
  currentPage: +localStorage.getItem("page") || 1,
  posts: [],
  limit: limitNode.value,
};

async function paginator() {
  const { currentPage, limit, posts } = store;
  posts.splice(0);
  const postsApi = await getPosts(currentPage, limit);
  posts.push(...postsApi);
  render();
}

function render() {
  const { currentPage } = store;
  pageNum.textContent = `${currentPage} страница`;
  localStorage.setItem("page", currentPage);
  main.innerHTML = "";
  const html = store.posts.map((post) => {
    const { id, title } = post;
    const row = document.createElement("div");
    const divNumPost = document.createElement("div");
    const divTittlePost = document.createElement("div");
    row.classList.add("row");
    divNumPost.classList.add("col-2", "text-center");
    divTittlePost.classList.add("col", "text-truncate");
    divNumPost.textContent = id;
    divTittlePost.textContent = title;
    row.append(divNumPost, divTittlePost);
    return row;
  });
  pages.forEach((page) => {
    page.classList.remove("active");
    page.classList.remove("disabled");
    if (+currentPage === 1) last.classList.add("disabled");
    if (+currentPage === 10) next.classList.add("disabled");
    if (+currentPage === +page.textContent) page.classList.add("active");
  });
  main.append(...html);
}

function limitHandler(event) {
  const target = event.target;
  store.limit = target.value;
  paginator();
}

function pageHandler(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.toString().includes("disabled")) return;
  target.classList.add("disabled"); // Исключаем возможность повторного клика
  switch (target?.dataset?.type) {
    case "last": {
      store.currentPage--;
      break;
    }
    case "next": {
      store.currentPage++;
      break;
    }
    default: {
      store.currentPage = target.textContent;
      break;
    }
  }
  paginator();
  target.classList.remove("disabled");
}

limitNode.addEventListener("change", limitHandler);
pages.forEach((page) => page.addEventListener("click", pageHandler));
paginator();
