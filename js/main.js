$(function () {
    $(".nav-button").click(function () {
        $("body").toggleClass("nav-open");
    });
});


$("#cardCarousel").click(function () {
    if ($("span", this).hasClass("icon-Pause")) {
        $('#carouselExampleControls').carousel('pause');
        $(this).attr("aria-label", "Play Carousel");
        $(this).attr("title", "Play Carousel");
        $("span", this).toggleClass("icon-Pause icon-Play");
    } else {
        $('#carouselExampleControls').carousel('cycle');
        $(this).attr("aria-label", "Pause Carousel");
        $(this).attr("title", "Pause Carousel");
        $("span", this).toggleClass("icon-Play icon-Pause");
    }
});