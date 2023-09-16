const seCarousel = document.querySelector('.se-carousel');
const sePrevBtn = document.querySelector('.se-prev-btn');
const seNextBtn = document.querySelector('.se-next-btn');



seNextBtn.addEventListener('click', () => {
  seCarousel.style.scrollBehavior = 'smooth';
  seCarousel.scrollLeft += 900;
})
sePrevBtn.addEventListener('click', () => {
  seCarousel.style.scrollBehavior = 'smooth';
  seCarousel.scrollLeft -= 900;
})


