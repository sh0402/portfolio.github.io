
const toggleBtn = document.querySelector('.nav-button');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});