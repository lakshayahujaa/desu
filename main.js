const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

carousel.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    carousel.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener('click',()=>{
    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollLeft +=900;
})
prevBtn.addEventListener('click',()=>{
    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollLeft -=900;
})
