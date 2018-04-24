// Delete Item From checkout

var removeItem;

$('.delete-confirmed').on('click', function (e) {
  e.preventDefault();
  $(removeItem).remove();
  $('.delete-overlay').removeClass('delete-confirm');
  $('main').focus();
});
$('.delete-confirm-close').on('click', function (e) {
  e.preventDefault();
  $('.delete-overlay').removeClass('delete-confirm');
  $('main').focus();
});

$('.product-delete').on('click', function (e) {
  e.preventDefault();
  removeItem = $(this).attr('href');
  var productName = $(this).parent().siblings('h3').text();
  $('.delete-overlay').addClass('delete-confirm');
  $('.delete-item-name').text(productName);
  $('.delete-confirmed').focus();

  $(removeItem).removeData();
});
