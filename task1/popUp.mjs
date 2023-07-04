import contentManager from "./content.mjs";
import { btns } from "./pagination.mjs";

let list = document.querySelector('#projects');
var modal = null;

export default function popUp(index) {
    if (modal === null) {
        document.getElementById("box").style.display = "block";
        modal = true
        buttonsModifiction(0);
        fillContent(index);
    } else {
        document.getElementById("box").style.display = "none";
        modal = null;
        buttonsModifiction(1);
    }
}

function fillContent(index) {
    if (localStorage.getItem('currentPage')) {
        let page = localStorage.getItem('currentPage');
        let users = JSON.parse(localStorage.getItem(`${page}`));

        document.querySelector('#box #userTitle').innerText = users[index].title;
        document.querySelector('#box #userBody').innerText = users[index].body;
        document.querySelector('#box #userId').innerText = `-User id ${users[index].id}`;
    } else {
        document.querySelector('#box #userTitle').innerText = contentManager.userData[index].title;
        document.querySelector('#box #userBody').innerText = contentManager.userData[index].body;
        document.querySelector('#box #userId').innerText = `-User id ${contentManager.userData[index].id}`;

    }
}

function buttonsModifiction(number) {
    switch (number) {
        case 0: list.style.pointerEvents = 'none'
            btns.btnNext.style.pointerEvents = 'none'
            btns.btnPrev.style.pointerEvents = 'none'
            break;
        case 1: list.style.pointerEvents = 'all'
            btns.btnNext.style.pointerEvents = 'all'
            btns.btnPrev.style.pointerEvents = 'all'
    }
}
