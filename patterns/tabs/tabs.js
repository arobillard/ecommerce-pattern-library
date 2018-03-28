// Tabs --------------------

$('.section-tab-btn').on('click', function (e) {
  var id = $(this).attr('href');

  e.preventDefault();
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(this).parent().addClass('section-tab-selected');
  $('.section-tab-page').removeClass('section-tab-page-active');
  $(id).addClass('section-tab-page-active');
});
