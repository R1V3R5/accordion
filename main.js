var processHeader1 = function(target) {
  $('.accordion-content-one').addClass('show').removeClass('hide')
  $('.accordion-content-two').removeClass('show').addClass('hide')
  $('.accordion-content-three').removeClass('show').addClass('hide')
};
var processHeader2 = function(target) {
  $('.accordion-content-one').addClass('hide').removeClass('show')
  $('.accordion-content-two').addClass('show').removeClass('hide')
  $('.accordion-content-three').addClass('hide').removeClass('show')
};
var processHeader3 = function(target) {
  $('.accordion-content-one').addClass('hide').removeClass('show')
  $('.accordion-content-two').addClass('hide').removeClass('show')
  $('.accordion-content-three').addClass('show').removeClass('hide')
};


$('.accordion-header-one').on('click', processHeader1)
$('.accordion-header-two').on('click', processHeader2)
$('.accordion-header-three').on('click', processHeader3)

carousel = $('.carousel')

var imgs = carouselImages.map(function(item) {
  return item.image_url
});

carousel.html(`<img src="${imgs[1]}">`)