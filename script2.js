const carouselOv = document.querySelector('.ov-carousel');
const prevBtnOv = document.querySelector('.ov-prev-btn');
const nextBtnOv = document.querySelector('.ov-next-btn');




nextBtnOv.addEventListener('click',()=>{
    carouselOv.style.scrollBehavior = 'smooth';
    carouselOv.scrollLeft +=900;
})
prevBtnOv.addEventListener('click',()=>{
    carouselOv.style.scrollBehavior = 'smooth';
    carouselOv.scrollLeft -=900;
   
})



