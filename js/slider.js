function initSlider(){
    $('.slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}

$(document).ready(function(){
    initSlider();
});
    
