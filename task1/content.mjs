import popUp from "./popUp.mjs";

let list = document.querySelector('#projects');
let closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', popUp);

class Content {
    constructor() {
        this.page = 1;
        this.userData = [];
    }

    getPage() {
        return this.page;
    }

    nextPage() {
        if (this.page > 11) return;
        this.page++;
        this.createContent();
    }

    prevPage() {
        if (this.page == 1) return;
        this.page--;
        this.createContent();
    }

    saveState(page, userData) {
        localStorage.setItem(`${page}`, JSON.stringify(userData));
        localStorage.setItem('currentPage', this.getPage())
    }

    dataFromCache() {
        let dataFromLocalStorage = localStorage.getItem(localStorage.getItem('currentPage'));
        let parseArray = JSON.parse(dataFromLocalStorage);
        return parseArray;
    }

    static async getUsers(limit, page = 1) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/` +
            `posts?_limit=${limit}&_page=${page}`);
        const data = await response.json();
        return data;
    }

    createElementsAndListeners(data) {
        data.forEach((user, index) => {
            const userEl = document.createElement('li');
            userEl.innerText = user.title;
            userEl.addEventListener('click', () => {
                popUp(index);
            })
            list.appendChild(userEl);
        })
    }

    fillElements(data) {
        let arr = list.children;
        for (let i = 0; i < arr.length; i++) {
            arr[i].innerText = data[i].title;
        }
    }

    async createContent() {
        let page = localStorage.getItem(this.getPage());
        if (page) {
            localStorage.setItem('currentPage', this.getPage())
            let usersFromLocalStorage = this.dataFromCache();
            if (list.children.length == 0) {
                this.createElementsAndListeners(usersFromLocalStorage)
            }
            this.fillElements(usersFromLocalStorage)
        } else {
            let usersFromFetch = await Content.getUsers(10, this.getPage());
            this.saveState(this.getPage(), usersFromFetch)
            this.userData = usersFromFetch;
            let arr = list.children;
            if (list.children.length == 0) {
                this.createElementsAndListeners(usersFromFetch)
            }
            this.fillElements(usersFromFetch)
        }
    }
}

let contentManager = new Content();
export default contentManager;





