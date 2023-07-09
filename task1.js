const url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async (url, limit = 10, page = 1) => {
    const response = await fetch(`${url}?_limit=${limit}&_page=${page}`);
    const headers = new Map(response.headers);
    const data = await response.json();
    const total = headers.get('x-total-count');
    const totalPages = Math.ceil(total / limit);
    return {
        data,
        totalPages,
    };
};

async function renderPost() {
    getPosts(url, limit = 10, page = 1)
        .then((result) => {
            let { data, totalPages } = result;

            displayList(data, totalPages);
            displayPagination(totalPages);
        });

    function displayList(postsData) {
        const post = document.querySelector('.posts');
        post.innerHTML = '';

        postsData.forEach(element => {
            const cardDiv = document.createElement("div");
            const cardBodyDiv = document.createElement("div");
            const cardTitle = document.createElement("h5");
            const cardText = document.createElement("p");
            const readMoreLink = document.createElement("a");

            cardDiv.classList.add("card");
            cardDiv.style.width = "85vw";
            cardDiv.style.margin = "1rem auto";
            cardDiv.style.top = "1rem";

            cardBodyDiv.classList.add("card-body");

            cardTitle.classList.add("card-title");
            cardTitle.innerText = `${element.title}`;

            cardText.classList.add("card-text");
            cardText.innerText = `${element.body}`;

            readMoreLink.classList.add("btn", "btn-primary");
            readMoreLink.href = "#";
            readMoreLink.style.right = "0";
            readMoreLink.innerText = "Read more";

            post.appendChild(cardDiv);
            cardDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(readMoreLink);
        });
    }

    function displayPagination(rowPage) {
        const ul = document.querySelector("ul");
        const li1 = ul.children[1];

        for (let i = 0; i < rowPage; i++) {
            const numPage = displayPaginationBtn(i + 1);
            ul.insertBefore(numPage, li1);
        };
    }

    function displayPaginationBtn(page) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("page-link");
        a.href = "#";
        a.innerText = page;
        li.appendChild(a);

        li.addEventListener('click', () => {
            currentPage = page;
            getPosts(url, limit = 10, page = currentPage)
                .then((result) => {
                    let { data, totalPages } = result;

                    displayList(data, totalPages);
                });
        })

        return li
    }
}

renderPost();