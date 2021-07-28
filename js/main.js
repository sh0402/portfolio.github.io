$(function () {
    $(".nav-button").click(function () {
        $("body").toggleClass("nav-open");
    });
});

$(document).ready(function(){ 
    $('.works-card').css('width', $(window).width()); 
    $('.works-card').css('height', $(window).height()); 
    $(window).resize(function() { 
        $('.works-card').css('width', $(window).width()); 
        $('.works-card').css('height', $(window).height()); 
    }); 
});

controlNextBtn = function() {
    var _scrollX = $('.cardCarousel').scrollLeft();
    $('.cardCarousel').scrollLeft(_scrollX + 150);
};

controlPrevBtn = function() {
    var _scrollX = $('.cardCarousel').scrollLeft();
    $('.cardCarousel').scrollLeft(_scrollX - 150);
};

new Swiper('.works-card', {
    draggable : true
});