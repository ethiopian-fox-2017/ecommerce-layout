$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:25,
      nav:true,
      responsive:{
          0:{
              items:3
          }
      }
  })

  $('.buttton-material').click(function(){
    $('.modal-cart').addClass('is-active')
  })
  $('.delete').click(() => {
    $('.modal').removeClass('is-active')
  })
  $('.cancel').click(() => {
    $('.modal').removeClass('is-active')
  })
  $('.button-login').click(function(){
    $('.modal-login').addClass('is-active')
  })
});
