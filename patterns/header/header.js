// Nav Mobile --------------------

$('.nav-label').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('nav-label-open');
  $('nav').toggleClass('nav-open');
});
