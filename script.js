$(window).on('load', function() {
  $('#preloader-logo').delay(5000).fadeOut();
  $('#preloader').delay(5000).fadeOut('slow'); 
  $('body').delay(5000).css({'overflow':'visible'});
});


$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.nav-icon1').toggleClass('open');
    });


    $('.about-nxt-button').on('click', function () {
  
      $('.about-page-content').hide().fadeOut(500),1000;
      $('.about-page-content1').show().fadeIn(500),1000;

    });

    $('.about-nxt-button1').on('click', function () {
  
      $('.about-page-content1').hide().fadeOut(500),1000;
      $('.about-page-content2').show().fadeIn(500),1000;

    });

    $('.about-nxt-button2').on('click', function () {
  
      $('.about-page-content2').hide().fadeOut(500),1000;
      $('.about-page-content').show().fadeIn(500),1000;

    });
   
  });

  $(document).ready(function () {
  
      $(".about-page-content").hide();
      $(".about-page-content1").hide();
      $(".about-page-content2").hide();


  
  });


  $(function() {
    setTimeout(function() { $("#about-hide").fadeOut(1500); 
    $(".about-page-content").fadeIn(1900)}, 1000)
    
    
    })


    