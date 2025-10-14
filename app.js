const shareOpenBtn = document.getElementById('share-open');
const shareCloseBtn = document.getElementById('share-close');
const sharePopup = document.querySelector('.card__share');
const cardArrow = document.querySelector('.card__arrow');


function openShare() {
  sharePopup.classList.add('active');
  cardArrow.classList.add('active');
}

function closeShare() {
  sharePopup.classList.remove('active');
  cardArrow.classList.remove('active');
}

shareOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sharePopup.classList.contains('active') ? closeShare() : openShare();
});


shareCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeShare();
});


document.addEventListener('click', (e) => {
  if (!sharePopup.contains(e.target) && !shareOpenBtn.contains(e.target)) {
    closeShare();
  }
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sharePopup.classList.contains('active')) {
    closeShare();
  }
});