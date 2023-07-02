export default class Modal {
  constructor() {
    this.closeButton = document.querySelector('.close-modal');
    this.modal = document.querySelector('.modal');
  }

  init() {
    this.closeButton.addEventListener('click', () => this.close());
    window.addEventListener('click', (e) => {
      if (e.target == this.modal) {
        this.close();
      }
    });
  }

  open() {
    this.modal.style.display = "block";
  }

  close() {
    this.modal.style.display = "none";
  }
}