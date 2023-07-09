import createHtmlElement from "../utilities/createHtmlElement.js";

export default class GenerateHtml {
  #loader = createHtmlElement('div', ['loader']);

  showLoader(container) {
    container.appendChild(this.#loader);
  }

  removeLoader() {
    this.#loader.remove();
  }

  createPhotos(photos, container) {
    container.innerHTML = '';

    photos.forEach( (item) => {
      const photo = this.createPhoto(item)

      container.appendChild(photo);
    });
  }

  createPhoto(item, container) {

    const text = createHtmlElement('p', ['card__text'], [`${item.title}`]);
    const Img = createHtmlElement('img', ['card__img-photo'], null, [
      {key: 'alt', val: `Photo`},
      {key: 'src', val: `${item.url}`}
    ]);
    const photo = createHtmlElement('div', ['card', 'col',  'mb-4', 'mr-2'],[
      createHtmlElement('h2', ['card__title'], [`Photo-${item.id}`], [{key: 'data-id', val: item.id}]),
      createHtmlElement('div', ['card__img'], [Img]),
      createHtmlElement('div', ['card__content'], [text])
    ]);

    if (container) {
      const button = createHtmlElement('button', ['back', 'btn', 'btn-primary'], ['back']);
      photo.appendChild(button);
      container.appendChild(photo);
    }

    return photo;
  }

  createPagination(container, startPage, endPage, totalPages, currentPage) {
    const paginationUl = createHtmlElement('ul', ['pagination', 'justify-content-center']);

    container.innerHTML = '';
    container.appendChild(paginationUl);

    if (startPage > 1) {
      const firstPageItem = createHtmlElement('li', ['page-item'], [
        createHtmlElement(
          'a',
          ['page-link'],
          ['«'],
          [{ key: 'href', val: '#' }, { key: 'data-page', val: '1' }])
      ]);

      paginationUl.appendChild(createHtmlElement('ul', ['pagination'], [firstPageItem]));
    }

    for (let i = startPage; i <= endPage; i++) {
      const active = (i === currentPage) ? 'active' : '';
      const pageItem = createHtmlElement('li', ['page-item', active], [
        createHtmlElement('a',
          ['page-link',],
          [i.toString()],
          [{ key: 'href', val: '#' }, { key: 'data-page', val: i }])
      ]);

      paginationUl.appendChild(createHtmlElement('ul', ['pagination'], [pageItem]));
    }

    if (endPage < totalPages) {
      const lastPageItem = createHtmlElement('li', ['page-item'], [
        createHtmlElement(
          'a',
          ['page-link'],
          ['»'],
          [{ key: 'href', val: '#' }, { key: 'data-page', val: totalPages }])
      ]);
      paginationUl.appendChild(createHtmlElement('ul', ['pagination'], [lastPageItem]));
    }
  }
}