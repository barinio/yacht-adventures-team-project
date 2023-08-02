$(document).ready(function () {
  // Swiper: Slider
  new Swiper('.swiper-review-container', {
    paginationClickable: true,
    dynamicBullets: true,
    simulateTouch: true,
    pagination: {
      el: '.slider-nav',
      clickable: true,
    },

    spaceBetween: 20,
    loop: false,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        // loop: true,
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
