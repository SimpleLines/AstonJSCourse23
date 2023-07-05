const getDataServer = async function(url){  
  const response = await fetch(url);
  const data = response.json();
  return data;  
}
getDataServer('https://jsonplaceholder.typicode.com/photos')
  .then(item => createPagination(item));
let nowPageIs = 1;
let arrSearchObject = [];
function createPagination(valueArray, limitPage = 10, valuePage){
  let allElementArray = valueArray.length;
  let onPageAll = limitPage;
  let allCountPage = Math.ceil(allElementArray / onPageAll);
  let middleDefaultPage = Math.floor(allCountPage / 2);
  let page = valuePage || middleDefaultPage;
  localStorage.setItem('arrayImage', JSON.stringify(valueArray));
  let otherValueArray = JSON.parse(localStorage.getItem('arrayImage'));
  let filterObjectPage = valueArray ? valueArray.slice((page - 1) * limitPage, page * limitPage) 
                        : otherValueArray.slice((page - 1) * limitPage, page * limitPage);
  arrSearchObject = filterObjectPage;
  getOjectsCardsAtDisplay(filterObjectPage);
  createButtons(allCountPage, page);
}
let footerPagination = document.querySelector('.footer__pagination');
let startUl = document.querySelector('.section__content');
function createButtons(count, page){  
  let createPreviousButton = document.createElement('button');
  createPreviousButton.className = 'footer__pagination-left';
  createPreviousButton.innerHTML = 'предыдущая';
  footerPagination.prepend(createPreviousButton);
  let createFirstButton = document.createElement('button');
  createFirstButton.innerHTML = 1;
  footerPagination.append(createFirstButton);
  nowPageIs = page;
  if(page === 1){
    let createFirstNextButton = document.createElement('button');
    createFirstNextButton.innerHTML = 2;
    footerPagination.append(createFirstNextButton);    
  }  
  if(page !== count && page !== 2 && page !== 3){
    let createSpanFirst = document.createElement('span');
    createSpanFirst.innerHTML = '...';
    footerPagination.append(createSpanFirst);
  }  
  for(let i = 2; i < count; i += 1){    
    if(i === page || (i === page + 1 && page !== 1) || (i === page - 1 && page !== count)){
      let createOtherButtons = document.createElement('button');
      createOtherButtons.innerHTML = i;
      footerPagination.append(createOtherButtons);
    }        
  } 
  if(page !== 1 && page !== count - 1 && page !== count - 2){
    let createSpanLast = document.createElement('span');
    createSpanLast.innerHTML = '...';
    footerPagination.append(createSpanLast);
  }  
  if(page === count){
     let createLastBackButton = document.createElement('button');
    createLastBackButton.innerHTML = count - 1;
    footerPagination.append(createLastBackButton);
  } 
  let createLastButton = document.createElement('button');
  createLastButton.innerHTML = count;
  footerPagination.append(createLastButton);
  let createNextButton = document.createElement('button');
  createNextButton.className = 'footer__pagination-rigth';
  createNextButton.innerHTML = 'следующая';
  footerPagination.append(createNextButton); 
  return createPreviousButton;
}
function getOjectsCardsAtDisplay(value){
  let arr = value;
  let indexSlesh = 0;
  let colorTitle = '';
  for(let i = 0; i < arr.length; i += 1){
    indexSlesh = arr[i].url.lastIndexOf('/');
    colorTitle = '#' + arr[i].url.substr(indexSlesh + 1);
    createCards(arr[i], colorTitle);
  }
}
function createCards(obj, color){  
  let createTotalLi = document.createElement('li');
  createTotalLi.className = 'section__content-card';
  startUl.append(createTotalLi);
  let createLink = document.createElement('a');
  createLink.href = '/AstonJSCourse23/task1/oneObject.html';
  createTotalLi.append(createLink);
  let createFigureElement = document.createElement('figure');
  createFigureElement.className = 'card';
  createLink.append(createFigureElement);
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
  return createTotalLi;  
}
footerPagination?.addEventListener('click', (event) => {
  footerPagination.innerHTML = '';
  startUl.innerHTML = '';
  let eventTargetInnerHTML = +event.target.innerHTML;  
  if(event.target.innerHTML === 'следующая'){  
    nowPageIs = ++nowPageIs;
    getDataServer('https://jsonplaceholder.typicode.com/photos')
      .then(item => createPagination(item, 10, nowPageIs));            
  } else if(event.target.innerHTML === 'предыдущая'){
    nowPageIs = --nowPageIs;
    getDataServer('https://jsonplaceholder.typicode.com/photos')
      .then(item => createPagination(item, 10, nowPageIs));
  } else {
    getDataServer('https://jsonplaceholder.typicode.com/photos')
      .then(item => createPagination(item, 10,  eventTargetInnerHTML));
  }
})
startUl.addEventListener('click', (event) => {
  movingObject(event.target.src);
})
function movingObject(obj){
  let arr = arrSearchObject.filter(item => item.url === obj);
  localStorage.setItem('object', JSON.stringify(arr[0]));
  console.log(arr);
}