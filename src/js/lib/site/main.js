import gravity from '../collection/gravity';

$('.header__burger').on('click', () => { 
    toggleBurger();
    $('body').toggleOverflow();
});
$('.menu').on('click', () => {
    toggleBurger();
     $('body').offOverflow();
});
function toggleBurger () {
    $('.header').toggleClass("fadeIn--open");
    
}


window.addEventListener('DOMContentLoaded', () => {
    //прилипание к мышке
    gravity('.gravity', '.gravity__element');
});