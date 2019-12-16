/*-------------------------------
Iniciando Swiper
-------------------------------*/

var mySwiper = new Swiper('#animacion', {
  // botones de navegacion
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // botones de paginacion
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  fadeEffect: {
    crossFade: true
  },

  // autoplay: {
  //   delay: 5000,
  // }

});