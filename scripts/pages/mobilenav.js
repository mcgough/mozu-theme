define(['jquery'],function($) {
  $('.hamburger').on('click',function(e){
    e.preventDefault();
    return $('.mobile-nav').toggleClass('mobile-nav-open');
  });
});