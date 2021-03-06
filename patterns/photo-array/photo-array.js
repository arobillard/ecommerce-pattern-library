// Photo Array --------------------

$('.photo-array-btn').on('click', function () {
  var imgSource = $(this).children().attr('src');

  $('.photo-array-btn').removeClass('photo-array-btn-selected');
  $(this).addClass('photo-array-btn-selected');
  $('.photo-array-main img').attr('src', imgSource);

});

$('.photo-array-active').on('click', function () {
  var imgSource = $('.photo-array-active img').attr('src');
  $('.photo-array-focus').addClass('photo-array-focus-open');
  $('.photo-array-focus img').attr('src', imgSource);
});

$('.photo-array-focus').on('click', function (e) {
  e.preventDefault();
  $('.photo-array-focus').removeClass('photo-array-focus-open');
});

var photoArray1 = $('[href="#photo-array-1"] img').attr('src');
var photoArray2 = $('[href="#photo-array-2"] img').attr('src');
var photoArray3 = $('[href="#photo-array-3"] img').attr('src');
var photoArray4 = $('[href="#photo-array-4"] img').attr('src');

$('.photo-array-focus-next').on('click', function (e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  switch ($('.photo-array-focus img').attr('src')) {
    case photoArray1:
      $('.photo-array-focus img').attr('src', photoArray2);
      break;
    case photoArray2:
      $('.photo-array-focus img').attr('src', photoArray3);
      break;
    case photoArray3:
      $('.photo-array-focus img').attr('src', photoArray4);
      break;
    case photoArray4:
      $('.photo-array-focus img').attr('src', photoArray1);
      break;
  }
});

$('.photo-array-focus-previous').on('click', function (e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  switch ($('.photo-array-focus img').attr('src')) {
    case photoArray1:
      $('.photo-array-focus img').attr('src', photoArray4);
      break;
    case photoArray2:
      $('.photo-array-focus img').attr('src', photoArray1);
      break;
    case photoArray3:
      $('.photo-array-focus img').attr('src', photoArray2);
      break;
    case photoArray4:
      $('.photo-array-focus img').attr('src', photoArray3);
      break;
  }
});
