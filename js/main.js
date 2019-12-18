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

/*-------------------------------
Iniciando wpsupport
-------------------------------*/
let btnActiveChatWasap = document.getElementById('btn-active-list-chat-wasap');
let btnCloseListWasap = document.getElementById('btn-close-wasap');
let boxListChatWasap = document.querySelector('.box-list-chat-wasap');

btnActiveChatWasap.addEventListener('click', function(){
  boxListChatWasap.classList.toggle("view-lis-chat");
  btnCloseListWasap.classList.toggle("view-btn-none");
});
btnCloseListWasap.addEventListener('click', function(){
  boxListChatWasap.classList.toggle("view-lis-chat");
  btnCloseListWasap.classList.toggle("view-btn-none");
});