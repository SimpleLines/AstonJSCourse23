const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchGetPosts = async ({ limit = 10, page = 1 }) => {
  const response = await fetch(
    `${BASE_URL}/posts?_limit=${limit}&_page=${page}`
  );
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
    data,
    total: headers.get('x-total-count') || null,
    limit,
    page,
  };
};

export const fetchGetComments = async (id) => {
  const response = await fetch(
    `${BASE_URL}/comments?postId=${id}`
  );
  const data = await response.json();
  return {
    data,
  };
};