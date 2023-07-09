let curPage = 1;
const limit = 10;
const postsEl = document.querySelector(".posts");

async function getPosts(page) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const resp = await fetch(`${url}/?_limit=${limit}&_page=${page}`);
  const data = await resp.json();

  return data;
}
async function main() {
  const postsData = await getPosts(curPage);
  let limit = 10;
  function displayPosts(page) {
    postsEl.innerHTML = "<div class='loading'>Идет загрузка...</div>";
    setTimeout(async () => {
      const postsData = await getPosts(curPage);
      postsEl.innerHTML = "";
      postsData.forEach((element, i) => {
        const postEl = `<div id='${element.id}' class='post'>${element.title}</div>`;
        postsEl.insertAdjacentHTML("beforeend", postEl);
      });
    }, 1000);
    page--;
  }
  async function displayPagination() {
    const paginationDiv = document.querySelector(".pagination");
    const countPages = 10;
    const ul = document.createElement("ul");
    ul.classList.add("pagination-list");
    for (let i = 0; i < countPages; i++) {
      const li = displayPaginationEl(i + 1);
      ul.appendChild(li);
    }
    paginationDiv.appendChild(ul);
  }
  function displayPaginationEl(page) {
    const li = document.createElement("li");
    li.classList.add("pagination-element");
    li.innerText = page;
    if (curPage == page) li.classList.add("pagination-el-active");
    li.addEventListener("click", () => {
      curPage = page;

      getPosts(curPage);
      displayPosts(postsData, limit, curPage);
      let pageCurrentActive = document.querySelector("li.pagination-el-active");
      pageCurrentActive.classList.remove("pagination-el-active");
      li.classList.add("pagination-el-active");
    });
    return li;
  }
  displayPosts(postsData);
  displayPagination(postsData);
}
main();
