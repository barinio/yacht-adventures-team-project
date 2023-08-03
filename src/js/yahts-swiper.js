let prevBtn = document.querySelector('.swiper-button-prev');
let nextBtn = document.querySelector('.swiper-button-next');
let listEl = document.querySelector('.yachts-block__card-list');

var swiper = new Swiper('.swiper', {
  slidesPerView: getSlidesPerView(),
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
      swiper.params.slidesPerView = getSlidesPerView();
      swiper.update();
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  return windowWidth <= 115 ? 'vertical' : 'horizontal';
}

function getSlidesPerView() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= 1280) {
    return 3;
  } else if (windowWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

nextBtn.addEventListener('click', onNextBtnChange);
function onNextBtnChange() {
  listEl.style.gap = '12px';
}
prevBtn.addEventListener('click', onPrevBtnChange);
function onPrevBtnChange() {}
