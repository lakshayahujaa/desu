document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".swiper-wrapper");
    const slides = document.querySelectorAll(".swiper-slide");
    const pagination = document.querySelector(".swiper-pagination");
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;
    const mainmenu = document.querySelector('.mainmenu');
    const closeMenu = document.querySelector('.closemenu');
    const openmenu = document.querySelector('.openmenu');
    const menu_items = document.querySelectorAll('.hamburger .mainmenu li a');
    let currentIndex = 0;
  
    // Function to change slide
    function goToSlide(index) {
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
      updatePagination();
    }
  
    // Function to auto-change slide every 5 seconds
    function autoSlide() {
      setInterval(function () {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
      }, 5000);
    }
  
    // Function to update pagination
    function updatePagination() {
      const paginationSpans = pagination.querySelectorAll("span");
      paginationSpans.forEach((span, index) => {
        span.classList.toggle("active", index === currentIndex);
      });
    }
  
    // Click event for previous button
    prevButton.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      goToSlide(currentIndex);
    });
  
    // Click event for next button
    nextButton.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
    });
  
    // Call autoSlide function to start the carousel
    autoSlide();
  });
  





openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}
function close(){
    mainmenu.style.top = '-100%';
}