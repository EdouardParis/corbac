$(function() {
  $('.menu-trigger').click(function() {
    if($('body').hasClass('menu-active')) {
      $('body').removeClass('menu-active');
      $('.menu-icon').removeClass('fa-chevron-left');
      $('.menu-icon').addClass('fa-bars');
    } else {
      $('body').addClass('menu-active');
      $('.menu-icon').removeClass('fa-bars');
      $('.menu-icon').addClass('fa-chevron-left');
    }
  });
});

