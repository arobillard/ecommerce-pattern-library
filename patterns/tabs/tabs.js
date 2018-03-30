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
  e.preventDefault();
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(".tab-button-2").parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $('#tab-page-2').addClass('section-tab-page-active');
});

$('.back-customer-info').on('click', function (e) {
  e.preventDefault();
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(".tab-button-1").parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $('#tab-page-1').addClass('section-tab-page-active');
});

$('.continue-payment').on('click', function (e) {
  e.preventDefault();
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(".tab-button-3").parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $('#tab-page-3').addClass('section-tab-page-active');
});
