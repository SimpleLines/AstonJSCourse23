export default async function getPosts(page, limit) {
  const URL = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
