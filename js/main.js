$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        responsive: [ 
            {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerMode: false
                }
            }
        ]
    
    });
})