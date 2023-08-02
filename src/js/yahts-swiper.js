var swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 320 ? 'vertical' : 'horizontal';

  return direction;
}

let swiperEl = document.querySelector('.swiper.yachts-swiper');
let prevBtn = document.querySelector('.swiper-button-prev');
let nextBtn = document.querySelector('.swiper-button-next');

nextBtn.addEventListener('click', onNextBtnChange);
function onNextBtnChange() {
  swiperEl.style.overflow = 'visible';
}
prevBtn.addEventListener('click', onPrevBtnChange);
function onPrevBtnChange() {
  swiperEl.style.overflow = 'hidden';
}
