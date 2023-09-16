const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')



nextBtn.addEventListener('click',()=>{
    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollLeft +=900;
})
prevBtn.addEventListener('click',()=>{
    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollLeft -=900;
})