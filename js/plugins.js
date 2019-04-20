$(function(){

    // Adjust Header Height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    // Transition Effect For Navbar
    $(window).scroll(function(){
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });

});