$(document).ready(function(){
    $('.fa-bars').click(function(){
        // console.log($(this));
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        //code here triggers for both, scroll & load events
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }
        else{
            $('header').removeClass('header-active');
        }
    });

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }

    });

   
});