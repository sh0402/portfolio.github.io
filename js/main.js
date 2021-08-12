
const toggleBtn = document.querySelector('.nav-button');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


const cardCarouselNext = document.querySelector('.cardCarousel-control-next');
const cardCarouselPrev = document.querySelector('.cardCarousel-control-prev');
const cardCarousel = document.querySelector('.cardCarousel');

cardCarouselPrev.addEventListener('click', () => {
    cardCarousel.scrollLeft -= 100
});

cardCarouselNext.addEventListener('click', () => {
    cardCarousel.scrollLeft += 100
});


// controlNextBtn = function() {
//     var _scrollX = $('.cardCarousel').scrollLeft();
//     $('.cardCarousel').scrollLeft(_scrollX + 150);
// };

// controlPrevBtn = function() {
//     var _scrollX = $('.cardCarousel').scrollLeft();
//     $('.cardCarousel').scrollLeft(_scrollX - 150);
// };





// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }


const carouselSlide = document.querySelector(".slideshow-container");
const carouselContents = document.querySelectorAll(".mySlides");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 1;
const size = carouselContents[0].clientWidth;

carouselSlide.getElementsByClassName.transform = "translateX(" + -size * couter + "px)"
