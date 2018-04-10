$('#same-info').change(function () {
  if ($('#same-info').is(':checked')) {
    $('.shipping-info input, .shipping-info select, .shipping-info textarea').attr('disabled', true);
    $('.shipping-info').addClass('shipping-disabled');
  } else {
    $('.shipping-info input, .shipping-info select, .shipping-info textarea').attr('disabled', false);
    $('.shipping-info').removeClass('shipping-disabled');
  }
});
