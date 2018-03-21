// Tabs --------------------

$('.section-tab-btn').on('click', function () {
  var id = $(this).attr('href');

  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(this).parent().addClass('section-tab-selected');
  $('.section-tab-section').removeClass('section-tab-section-active');
  $(id).addClass('section-tab-section-active');
});
