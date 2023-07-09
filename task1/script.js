const postsSection = document.querySelector(".posts-section");
const numberPerPage = 10;
var pageNumber = 1;
var numberOfPages = 10;

const fetchPosts = async (pageNumber) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${numberPerPage}`
    );
    const posts = await response.json();
    postsSection.innerHTML = "";
    posts.forEach((post) => {
        postsSection.innerHTML += `
      <div class="posts-card">
         <div class="post-title">
            <h2 class="post-title-text">${post.id}. ${post.title}</h2>
         </div>
         <div class="post-body">
            <p class="post-body-text">
               ${post.body}
            </p>
         </div>
      </div>  
      `;
    });
  
};

function setPagination(){
   const paginationWrapper = document.querySelector('.pagination__wrapper')
   for(let i = 1; i <= numberOfPages;i++){
      const paginationItem = document.createElement('a')
      paginationItem.textContent = i
      paginationWrapper.appendChild(paginationItem)
      elementArr = paginationItem
      paginationItem.addEventListener('click', ()=>{
         pageNumber = paginationItem.textContent
         fetchPosts(pageNumber);
      })
   }
}

const prev = document.querySelector('.prev');
prev.addEventListener('click', (e) => {
   e.preventDefault();
   if (pageNumber > 1) {
      pageNumber--;
      fetchPosts(pageNumber);
   }
});

const next = document.querySelector(".next");
next.addEventListener("click", (e) => {
    e.preventDefault();
    if (pageNumber < numberOfPages) {
        pageNumber++;
        fetchPosts(pageNumber);
    }
});

setPagination()
fetchPosts();

