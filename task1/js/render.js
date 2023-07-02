export const renderPosts = (data, goToPostPage) => {
  const postsList = document.createElement('ul');
  postsList.classList.add('posts__list', 'list-reset');

  for (let post of data) {
    const postItem = document.createElement('li');
    const postLink = document.createElement('a');
    const postTitle = document.createElement('h2');
    const postBody = document.createElement('p');

    postItem.classList.add('post');
    postLink.classList.add('post__link');
    postTitle.classList.add('post__title');
    postBody.classList.add('post__body');

    postLink.append(postTitle, postBody);
    postItem.append(postLink);

    postTitle.textContent = `${post.id}. ${post.title}`;
    postBody.textContent = post.body;
    postLink.href = `?id=${post.id}`;

    postLink.addEventListener('click', (e) => {
      e.preventDefault();
      goToPostPage(post);
    });

    postsList.append(postItem);
  }

  return postsList;
};

export const renderPagination = (totalPages, currentPage, setPage) => {
  const pagination = document.createElement('nav');
  pagination.classList.add('pagination');

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.classList.add('page__link');
    pageLink.textContent = i;

    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      setPage(i);
    });

    pageLink.href = `?page=${i}`;

    pagination.append(pageLink);
  }

  return pagination;
};

export const renderComments = (data) => {
  const commentsList = document.createElement('ul');
  commentsList.classList.add('comments__list', 'list-reset');

  for (let comment of data) {
    const commentItem = document.createElement('li');
    const commentName = document.createElement('h2');
    const commentBody = document.createElement('p');

    commentItem.classList.add('comment');
    commentName.classList.add('comment__name');
    commentBody.classList.add('comment__body');

    commentName.textContent = comment.name;
    commentBody.textContent = comment.body;

    commentItem.append(commentName, commentBody);
    commentsList.append(commentItem);
  }

  return commentsList;
};
