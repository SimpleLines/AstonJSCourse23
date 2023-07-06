async function getPosts() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json()
    return data
}
async function main() {
    let page = 1;
    let limit = 10;
    const postsData = await getPosts()
    function showPosts(arrData, maxPage, currentPage) {
        const postsElement = document.querySelector('.post')
        postsElement.innerHTML = ''
        currentPage--;

        const start = maxPage * currentPage
        const end = start + maxPage
        const paginatedData = arrData.slice(start, end)

        paginatedData.forEach((element) => {
            const postTitle = document.createElement("div");
            postTitle.classList.add("post");
            postTitle.innerText = `${element.title}`;
            postsElement.appendChild(postTitle);
        })
    }
    function showPagination(arrData, maxPage) {
        const paginationPages = document.querySelector('.pagination')
        const pagesCount = Math.ceil(arrData.length / maxPage)
        const ul = document.createElement("ul")
        ul.classList.add('paginationList')
        for (let i = 0; i < pagesCount; i++) {
            const liEl = showPaginationButton(i + 1);
            liEl.id = i + 1;
            ul.appendChild(liEl)
        }
        paginationPages.appendChild(ul)
    }
    function nextPreBtn() {
        let ulElemnt = document.querySelector('.paginationList')
        let nextBtn = document.createElement('span');
        nextBtn.innerText = 'следующая'
        nextBtn.classList.add('paginationItem')
        let preBtn = document.createElement('span');
        preBtn.innerText = 'предыдущая'
        preBtn.classList.add('paginationItem')
        ulElemnt.appendChild(nextBtn)
        ulElemnt.prepend(preBtn)
        nextBtn.addEventListener('click', function () {
            if (page < 10) {
                showPosts(postsData, limit, ++page)
                let liElement = document.querySelector('li.paginationItem.paginationActive')
                liElement.classList.remove('paginationActive')
                let currentLi = document.getElementById(page)
                currentLi.classList.add('paginationActive')
            }

        })
        preBtn.addEventListener('click', function () {
            if (page > 1) {
                showPosts(postsData, limit, --page)
                let liElement = document.querySelector('li.paginationItem.paginationActive')
                liElement.classList.remove('paginationActive')
                let currentLi = document.getElementById(page)
                currentLi.classList.add('paginationActive')
            }
        })
    }
    function showPaginationButton(currentPage) {
        const liElement = document.createElement('li');
        liElement.classList.add('paginationItem')
        liElement.innerText = currentPage
        if (currentPage == page) liElement.classList.add('paginationActive')
        liElement.addEventListener('click', function () {
            page = currentPage
            showPosts(postsData, limit, page)
            let currentLi = document.querySelector('li.paginationActive')
            currentLi.classList.remove('paginationActive')
            liElement.classList.add('paginationActive')
        })

        return liElement
    }
    showPosts(postsData, limit, page)
    showPagination(postsData, limit)
    nextPreBtn()

}
main()