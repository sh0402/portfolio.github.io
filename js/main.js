
const toggleBtn = document.querySelector('.nav-button');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


const cardCarouselNext = document.querySelector('.cardCarousel-control-next');
const cardCarouselPrev = document.querySelector('.cardCarousel-control-prev');
const cardCarousel = document.querySelector('.cardCarousel');

cardCarouselPrev.addEventListener('click', () => {
    cardCarousel.scrollLeft -= 150
});

cardCarouselNext.addEventListener('click', () => {
    cardCarousel.scrollLeft += 150
});


// controlNextBtn = function() {
//     var _scrollX = $('.cardCarousel').scrollLeft();
//     $('.cardCarousel').scrollLeft(_scrollX + 150);
// };

// controlPrevBtn = function() {
//     var _scrollX = $('.cardCarousel').scrollLeft();
//     $('.cardCarousel').scrollLeft(_scrollX - 150);
// };

