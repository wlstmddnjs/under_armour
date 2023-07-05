$(document).ready(function(){
    var swiper = new Swiper(".firstSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".secondSwiper", {
      slidesPerView:4,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $('.hamburger').click(function(){
      $('.m-submenu').toggleClass('active');
  })

 
    $('.f-btn').click(function(){
          $(this).parent().toggleClass('on');
          $(this).parent().siblings().removeClass('on')
      });
});