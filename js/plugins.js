$(function(){

    // Adjust Header Height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
    });

    // Transition Effect For Navbar
    $(window).scroll(function(){
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });

    // Smooth Scrolling
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.about-me').offset().top - 70
        }, 1000);
    });

    // Scrolling Smoothly to Every Section

    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 70
        }, 1000);
    });

});