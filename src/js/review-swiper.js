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
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
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
