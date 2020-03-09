$(document).ready(function() {
  $(".banner-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
  });
});
