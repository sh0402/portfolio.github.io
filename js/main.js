
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


// const carouselSlide = document.querySelector('.slider-inner');
// const carouselItem = document.querySelectorAll('.slider-item');

// const prevBtn = document.querySelector('.prevBtn');
// const nextBtn = document.querySelector('.nextBtn');


// let numberOfItem = carouselItem.length;
// let slideWidth = carouselItem[0].clientWidth;
// let currentSlide = 0;

// function init() {
//     slideImage.forEach((img, i) => {
//         img.style.left = i * 100 + '%';
//     });
//     slideImage[0].classList.add('active');

//     createNavigationDots();
// }

// //create navigatiton dots
// function createNavigationDots() {
//     for (let i = 0; i < numberOfImages; i++) {
//         const dot = document.createElement('div');
//         dot.classList.add('single-dot');
//         navigationDots.appendChild(dot);
//         dot.addEventListener('click', () => {
//             goToSlide(i);
//         });
//     }

//     navigationDots.children[0].classList.add('active');
// }

// //next & prev buttons
// nextBtn.addEventListener('click', () => {
//     if (currentSlide >= numberOfImages - 1) {
//         goToSlide(0);
//         return;
//     }
//     currentSlide++;
//     goToSlide(currentSlide);
// });

// prevBtn.addEventListener('click', () => {
//     if (currentSlide <= 0) {
//         goToSlide(numberOfImages - 1);
//         return;
//     }
//     currentSlide--;
//     goToSlide(currentSlide);
// });

// function goToSlide(slideNumber) {
//     slideContainer.style.transform = 'translateX(-' + slideWidth *
//         slideNumber + 'px)';
//     currentSlide = slideNumber;
//     setActiveClass();
// }

// function setActiveClass() { 
//     //set active class to slide
//     let currentActive = document.querySelector('.slide-img.active');
//     currentActive.classList.remove('active');
//     slideImage[currentSlide].classList.add('active');
//     //set active class to dot
//     let currentDot = document.querySelector('.single-dot.active');
//     currentDot.classList.remove('active');
//     navigationDots.children[currentSlide].classList.add('active');
// }
// init();
    