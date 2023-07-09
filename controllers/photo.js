import PhotoService from "../api/photoService.js";
import GenerateHtml from "../views/GenerateHtml.js";

const photoService = new PhotoService();
const photoId = new URLSearchParams(location.search).get('id');
const page = new URLSearchParams(location.search).get('page');


photoService.getPhoto(photoId).then((res) => {
  new GenerateHtml().createPhoto(res, document.querySelector('.container'));

  document.querySelector('.back').addEventListener('click', () => {
    history.go(-1)
  })
});