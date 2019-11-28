'use strict'

$('document').ready(function(){

    $('.slider').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    })

    window.wasScrolled = false;
    $(window).bind('scroll',function() {
    if (!window.wasScrolled) { 
        $('html, body').animate ({
            scrollTop:document.getElementById('logo-pic').getBoundingClientRect().top
        },1000
    )}
    window.wasScrolled = true;
    })

    var icon = $('.nav-icon');
    var bigNav = $('.big-nav');

    icon.click(function(){
        $(this).toggleClass('open');
        $(this).find('span').toggleClass('white-bg');

        if ($(this).hasClass('open')) {
            bigNav.slideDown('slow');
        }
        
        else {
            bigNav.slideUp(200);
        }
    });
});