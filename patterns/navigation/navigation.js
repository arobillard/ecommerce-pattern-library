// Category Selector --------------------

$('.category-selector').on('click', function (e) {
  e.preventDefault();
  var categoryName = $(this).attr('id');
  var breadCrumbName = $(this).children('p').text();
  $('.category-selector').removeClass('category-selected');
  $(this).addClass('category-selected');
  $('#products').removeClass();
  $('#products').addClass(categoryName);
  $('.bread-crumbs-category a').text(breadCrumbName);
});

$('.bread-crumbs-all-products').on('click', function (e) {
  e.preventDefault();
  $('.category-selector').removeClass('category-selected');
  $('#category-all').addClass('category-selected');
  $('#products').removeClass();
  $('#products').addClass('category-all');
  $('.bread-crumbs-category a').text('All');
});
