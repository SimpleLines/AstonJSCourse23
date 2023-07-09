let thisObject = JSON.parse(localStorage.getItem('object'));
let object = document.querySelector('.object');
function createCards(obj, color){  
  let createTotalDiv = document.createElement('div');
  createTotalDiv.className = 'section__content-card';
  object.append(createTotalDiv); 
  let createFigureElement = document.createElement('figure');
  createFigureElement.className = 'card';
  createTotalDiv.append(createFigureElement);
  let createImgElement = document.createElement('img');
  createImgElement.className = 'card__img';
  createImgElement.src = obj.url;
  createImgElement.alt = 'картинка';
  createImgElement.style.width = '300px';
  createImgElement.style.height = '150px';
  createFigureElement.append(createImgElement);
  let createFigcaptionElement = document.createElement('figcaption');
  createFigcaptionElement.className = 'card__title';
  createFigcaptionElement.innerHTML = obj.title;
  createFigcaptionElement.style.color = color;
  createFigureElement.append(createFigcaptionElement);    
  return createTotalDiv;  
}
function getOjectsCardsAtDisplay(obj){
  let indexSlesh = obj.url?.lastIndexOf('/');
  let colorTitle = '#' + obj.url?.substr(indexSlesh + 1);
  createCards(obj, colorTitle);
}
getOjectsCardsAtDisplay(thisObject);