(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    input1: document.getElementById("username"),
    input2: document.getElementById("email"),
    input3: document.getElementById("phone"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    if (areInputsFilled()) {
      toggleModal();
    } else {
      alert("Please complete the form.");
    }
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();