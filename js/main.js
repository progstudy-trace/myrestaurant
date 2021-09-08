$('.slider').slick({
  dots:true,
  autoplay:true,
  autoplaySpeed:3000,
});

$(function(){
  $('.header-right').click(function(){
    if($('.header-right').hasClass('open')){
      $('.header-right').removeClass('open');
      $('nav').slideUp();
      $('.header-right i').removeClass('fas fa-times').addClass('fas fa-bars');
    }else{
      $('.header-right').addClass('open');
      $('nav').slideDown();
      $('.header-right i').removeClass('fas fa-bars').addClass('fas fa-times');
    }
  });
});


