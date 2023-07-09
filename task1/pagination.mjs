import contentManager from "./content.mjs";

let btnNext = document.getElementById('btn-next');
let btnPrev = document.getElementById('btn-prev');
let curPage = document.getElementById('cur-page');
curPage.innerText = 1;
btnPrev.disabled = true;
contentManager.createContent.call(contentManager);

btnNext.addEventListener('click', () => {
    contentManager.nextPage.call(contentManager);
    curPage.innerText = contentManager.page;
    if (contentManager.page == 10) btnNext.disabled = true;
    btnPrev.disabled = false;

})

btnPrev.addEventListener('click', () => {
    contentManager.prevPage.call(contentManager);
    curPage.innerText = contentManager.page;
    if (contentManager.page == 1) btnPrev.disabled = true
    btnNext.disabled = false

})

export const btns = { btnNext, btnPrev }


