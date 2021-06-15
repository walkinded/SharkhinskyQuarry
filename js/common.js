$(function() {
  $('.header__button-menu').click(function() {
    $('body').addClass('overflow-hidden');
    $('.header__mobile').fadeIn();
  });

  $('.header__mobile-close').click(function() {
    $('body').removeClass('overflow-hidden');
    $('.header__mobile').fadeOut();
  });
});

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 181){
      $('header').addClass('header_fixed');    
      $('.fantom_block').addClass('fantom_block_on');  
  }else{
      $('header').removeClass("header_fixed"); 
      $('.fantom_block').removeClass('fantom_block_on');
    }
});

$('.fancybox').fancybox();