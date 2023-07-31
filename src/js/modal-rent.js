const refs = {
  form: document.querySelector('.rent-form'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('.backdrop'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (refs.form.checkValidity()) {
    toggleModal();
    refs.form.reset();
  }
});

refs.closeModalBtn.addEventListener('click', function () {
  toggleModal();
});
