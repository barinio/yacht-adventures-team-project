VanillaTilt.init(document.querySelectorAll('.hero-image-container'), {
  max: 15,
  speed: 400,
  glare: false,
});

let btnEl = document.querySelector('.hero-btn');
btnEl.addEventListener('click', scrollToAnchor);

function scrollToAnchor() {
  window.scroll({
    top: document.querySelector('#about').offsetTop,
    behavior: 'smooth',
  });
}
