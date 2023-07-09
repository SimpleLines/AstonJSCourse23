export default class Pagination {
  #totalItems = 5000;
  constructor(limit) {
    this.currentPage = 1;
    this.limit = limit;
  }

  updatePage({page}) {
    this.currentPage = page;
    this.init();
  }

  calculatePageRange() {
    const totalPages = this.#totalItems / this.limit;

    let startPage, endPage;

    if (totalPages <= 7) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (this.currentPage <= 4) {
        startPage = 1;
        endPage = 7;
      } else if (this.currentPage >= totalPages - 3) {
        startPage = totalPages - 6;
        endPage = totalPages;
      } else {
        startPage = this.currentPage - 3;
        endPage = this.currentPage + 3;
      }
    }

    return [startPage, endPage, totalPages];
  }

  init(data = null) {
    this.#totalItems = data?.totalItems || 5000;
  }
}