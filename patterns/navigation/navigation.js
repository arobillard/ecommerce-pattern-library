// Category Selector --------------------

$('.category-selector').on('click', function () {
  var categoryName = $(this).attr('id');
  $('.category-selector').removeClass('category-selected');
  $(this).addClass('category-selected');
  $('.product-sort').removeClass('category-all category-board-games category-card-games category-rpgs category-dice category-accessories');
  $('.product-sort').addClass(categoryName);
});
