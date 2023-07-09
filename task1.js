const BASE_URL = {
    base_url: 'https://jsonplaceholder.typicode.com/',
};

const postsList = document.querySelector('.posts-list');
const paginationList = document.querySelector('.pagination-list');




const fetchingPosts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch (error) {
        throw new Error(error)
    }
};


const init = async () => {
    let currentPage = 1;
    const postsPerPage = 10;

    const postsData = await fetchingPosts(`${BASE_URL.base_url}posts`);

    
    function displayPostList(arr, postsOnPage, currPage) {
        const start = postsOnPage * currPage;
        currPage--;
        const end = start + postsOnPage;
        const paginateArr = arr.slice(start, end);
        paginateArr.forEach((_, i) => {
            const postListItem = document.createElement('li');
            const postTitle = document.createElement('h2');
            const textSpan = document.createElement('span');
            postsList.appendChild(postListItem);
            postListItem.appendChild(postTitle);
            postTitle.innerText = postsData[i].title;
            postListItem.appendChild(textSpan);
            postListItem.classList.add('post-item');
            textSpan.classList.add('post-item-text');
            textSpan.innerText = postsData[i].body;
        })
    };

    function displayPaginationList(arr, postsOnPage) {
        const buttonQuantity = Math.ceil(arr.length / postsOnPage);
        for (let i = 0; i < buttonQuantity; i++) {
            const paginationItem = document.createElement('li');
            const paginationLink = document.createElement('a');
            paginationLink.src = '#';
            const textSpan = document.createElement('span');
            paginationList.appendChild(paginationItem);
            paginationItem.classList.add('pagination-item');
            paginationItem.appendChild(paginationLink);
            paginationLink.classList.add('pagination-link');
            paginationLink.appendChild(textSpan);
            textSpan.classList.add('pagination-text');
            textSpan.innerText = `${i + 1}`;
            paginationItem.addEventListener('click', () => {
                displayPostList(postsData, postsPerPage, i);
            })
        }
    };


    displayPostList(postsData, postsPerPage, currentPage);
    displayPaginationList(postsData, postsPerPage);
}
init();
