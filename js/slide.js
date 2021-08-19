let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// $(document).ready(function () {
//     $('.slideshow-container').each(function () {

//         var highestBox = 0;
//         $('.mySlides', this).each(function () {

//             if ($(this).height() > highestBox)
//                 highestBox = $(this).height();
//         });

//         $('.mySlides', this).height(highestBox);

//     });
// });


const obj1 = document.getElementById('myInfo').style.height = "360px"; 
const obj2 = document.getElementById('skills').style.height = "360px";
const obj3 = document.getElementById('hobbies').style.height = "360px";