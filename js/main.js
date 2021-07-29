$(function () {
    $(".nav-button").click(function () {
        $("body").toggleClass("nav-open");
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
