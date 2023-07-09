let resultBlock = document.querySelector(".posts");
let btnBlock = document.querySelector(".buttonBlock");
let prevPage = document.querySelector(".leftOutsideBtn");
let nextPage = document.querySelector(".rightOutsideBtn");

let posts = [];
const limit = 10;
let active; 
const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function firstPage() {
  let response = await getData(url);
  posts.push(...response);
  resultBlock.innerHTML = printPost(posts.slice(0, limit));
  btnBlock.innerHTML = createBtn(getNumberOfButton(posts, limit));
  active = btnBlock.firstChild
  hideOverPages();
}

firstPage();

function getNumberOfButton(arr, num) {
  return Math.ceil(arr.length / num);
}

function printPost(arr) {
  for (i = 0, res = ""; i < arr.length; i++) {
    res += `<div class='posts-item'>
              <p class='post-title'> ${arr[i].title} </p>
              <p class='post-description'> ${arr[i].body} </p>
            </div> `;
  }
  return res;
}

function createBtn(count) {
  for (i = 1, result = ""; i <= count; i++) {
    result += `<span class='btn'> ${i} </span> `;
  }
  return result;
}

document.addEventListener("click", handlerClick);

function handlerClick() {
  if ([...event.target.classList].includes("btn")) {
    let btnContent = event.target.textContent;
    active = event.target;
    let start = limit * (btnContent - 1);
    let end = limit * btnContent;
    resultBlock.innerHTML = printPost(posts.slice(start, end));
  }
  hideOverPages()
}

function hideOverPages() {
  let items = [...btnBlock.children];
  if (items.length > 5) {
    items.forEach((item) => item.classList.add("_hide"));
    items[0].classList.remove("_hide");
    if (active.previousElementSibling) {
      active.previousElementSibling.classList.remove("_hide");
    }
    active.classList.remove("_hide");
    if (active.nextElementSibling) {
      active.nextElementSibling.classList.remove("_hide");
    }
    items[items.length - 1].classList.remove("_hide");
  }
}

prevPage.addEventListener("click", function () {
  if (active.textContent && +active.textContent>1) {
    let start = limit * (+active.textContent - 2);
    let end = limit * (+active.textContent - 1);
    resultBlock.innerHTML = printPost(posts.slice(start, end));
    hideOverPages();
    active = active.previousElementSibling
  }
});

nextPage.addEventListener("click", function () {
  if (+active.textContent < 9) {
    let start = limit * (+active.textContent + 1);
    let end = limit * (+active.textContent + 2);
    resultBlock.innerHTML = printPost(posts.slice(start, end));
    hideOverPages();
    active = active.nextElementSibling;
  }
});
