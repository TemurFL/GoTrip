// Carusel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    starPosition: 0,
    items: 1,
    responsive : {
        540: {
            starPosition: 1,
            items: 3,
        },
        
        1200: {
            margin: 30,
            items: 3,
        },
    },
});

$('.sleder__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.sleder__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav icon
const navBTN = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');


navBTN.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}