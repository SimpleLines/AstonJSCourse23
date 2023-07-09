export default class PhotoService {
  #API_URL = 'https://jsonplaceholder.typicode.com/photos'
  constructor(url, limit) {
    this.url = url;
    this.limit = limit;
  }

  async getPhotos(page) {
    const response = await fetch(`${this.#API_URL}?_limit=${this.limit}&_page=${page}`);

    const res = {
      data: await response.json(),
      page
    };

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    res.totalItems = +response.headers.get('x-total-count');

    return res;
  }

  async getPhoto(id) {
    const response = await fetch(`${this.#API_URL}/${id}`);

    const res = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return res;
  }
}