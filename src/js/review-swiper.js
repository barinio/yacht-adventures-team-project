$(document).ready(function () {
  // Swiper: Slider
  new Swiper('.swiper-container', {
    paginationClickable: true,
    dynamicBullets: true,
    simulateTouch: true,
    pagination: {
      el: '.swiper-nav',
      clicable: true,
    },
    spaceBetween: 20,
    breakpoints: {
      1980: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      sensivity: 1,
    },
  });
});
