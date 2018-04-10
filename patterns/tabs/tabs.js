// Tabs --------------------

$('.section-tab-btn').on('click', function (e) {
  var id = $(this).attr('href');

  e.preventDefault();
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(this).parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $(id).addClass('section-tab-page-active');
});

$('.continue-shipping, .back-shipping').on('click', function (e) {
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(".tab-button-2").parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $('#tab-page-2').addClass('section-tab-page-active');
  $('html, body').animate({
      scrollTop: $(".tab-button-1").offset().top
  }, 50);
});

$('.back-customer-info').on('click', function (e) {
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(".tab-button-1").parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $('#tab-page-1').addClass('section-tab-page-active');
  $('html, body').animate({
      scrollTop: $(".tab-button-1").offset().top
  }, 50);
});

$('.continue-payment').on('click', function (e) {
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(".tab-button-3").parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $('#tab-page-3').addClass('section-tab-page-active');
  $('html, body').animate({
      scrollTop: $(".tab-button-1").offset().top
  }, 50);
});
