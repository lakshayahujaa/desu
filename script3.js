const seCarousel = document.querySelector('.se-carousel');
const sPrevBtn = document.querySelector('.prevbtn');
const sNextBtn = document.querySelector('.nextbtn');



sNextBtn.addEventListener('click', () => {
  seCarousel.style.scrollBehavior = 'smooth';
  seCarousel.scrollLeft += 900;
})
sPrevBtn.addEventListener('click', () => {
  seCarousel.style.scrollBehavior = 'smooth';
  seCarousel.scrollLeft -= 900;
})