const backDivs = document.querySelectorAll('.back');
let flippedCard = null;

const btns = document.querySelectorAll('.services-btn');
btns.forEach(btn => {
  btn.addEventListener('click', madeFlipCard);
});

function madeFlipCard(e) {
  const contentEl = e.target.closest('.services-content');
  if (flippedCard) {
    flippedCard.classList.remove('flipped');
  }
  contentEl.classList.add('flipped');
  flippedCard = contentEl;
}
document.addEventListener('click', e => {
  if (!e.target.closest('.services-content')) {
    flippedCard.classList.remove('flipped');
    flippedCard = null;
  }
});
backDivs.forEach(div => {
  div.addEventListener('click', e => {
    const contentEl = e.target.closest('.services-content');
    if (flippedCard === contentEl) {
      contentEl.classList.remove('flipped');
      flippedCard = null;
    } else {
      if (flippedCard) {
        flippedCard.classList.remove('flipped');
      }
      contentEl.classList.add('flipped');
      flippedCard = contentEl;
    }
  });
});
