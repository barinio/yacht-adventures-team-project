const form = document.querySelector('.rent-form');
form.addEventListener('submit', onFormSubmit);

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  formInputs: document.querySelectorAll('input[type="text"], textarea'),
};

function areInputsFilled() {
  for (const input of refs.formInputs) {
    if (input.value.trim() === '') {
      return false;
    }
  }
  return true;
}
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
refs.openModalBtn.addEventListener('click', e => {
  e.preventDefault();
  if (areInputsFilled()) {
    toggleModal();
    form.reset();
  } else {
    alert('Будь ласка, заповніть форму');
  }
});

refs.closeModalBtn.addEventListener('click', toggleModal);

function onFormSubmit() {
  form.reset();
}
