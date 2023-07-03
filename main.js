import Pagination from "./models/Pagination.js";
import PhotoService from "./api/PhotoService.js";
import GenerateHtml from "./views/GenerateHtml.js";

const API_URL = 'https://jsonplaceholder.typicode.com/photos';
const LIMIT = 10;
const initialPage = +new URLSearchParams(location.search).get('page') || 1;
const photosContainerEl = document.querySelector('.photos');
const paginationContainerEl = document.querySelector('.navigation');
const generateHtml = new GenerateHtml();
const pagination =  new Pagination(LIMIT);
const photoService = new PhotoService(API_URL, LIMIT);

function handlerPagination(event) {
  event.preventDefault();

  if (event.target.tagName === 'A') {
    const page = +event.target.dataset.page;
    photoService.getPhotos(page).then((res) => {
      pagination.updatePage(res);
      history.pushState({ page }, `Page ${page}`, `?page=${page}`);
      generateHtml.createPhotos(res.data, photosContainerEl);
      generateHtml.createPagination(paginationContainerEl, ...pagination.calculatePageRange(), page);
    })
  }
}

function initPage(page) {
  generateHtml.showLoader(photosContainerEl)
  photoService.getPhotos(page).then( (res) => {
    pagination.init(res);
    generateHtml.removeLoader();
    generateHtml.createPhotos(res.data, photosContainerEl);
    generateHtml.createPagination(paginationContainerEl, ...pagination.calculatePageRange(), page);

    paginationContainerEl.addEventListener('click', handlerPagination);
  }).catch((error) => {
    generateHtml.removeLoader();
    photosContainerEl.innerHTML = `<p class="text-danger">${error.message}</p>`;
  });
}

window.addEventListener('popstate', (event) => {
  const params = new URLSearchParams(location.search);
  const initialPage = +params.get('page') || 1;

  params.forEach(e => console.log(e))
  console.log(2)
  if (params.has('photo')) {
    history.replaceState(null, `Page ${initialPage}`, `?page=${initialPage}`);
    window.location.href = `index.html?page=${initialPage}`;
    initPage(initialPage);
  } else {
    initPage(initialPage);
  }
});

photosContainerEl.addEventListener('click', (event) => {
  const photo = event.target.closest('.card');

  if (photo) {
    const photoId = photo.querySelector('.card__title').dataset.id

    history.pushState({ page: pagination.currentPage }, `Photo ${photoId}`, `?page=${pagination.currentPage}&photo=${photoId}`);
    window.location.href = `./html/photo.html?page=${pagination.currentPage}&id=${photoId}`;
  }
});

initPage(initialPage);