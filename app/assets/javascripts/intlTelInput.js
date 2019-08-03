//= require intlTelInput/intlTelInput-jquery
//= require intlTelInput/utils

(function ($) {
  $(document).on('ready page:load', function () {
    $('[data-intl-tel-input]').each(function () {
      var element = $(this);
      var hidden = $('<input type="hidden"/>')
        .attr('name', element.attr('name'))
        .val(element.val())
        .insertAfter(element);
      element.intlTelInput(element.data('intl-tel-input') || {});

      element.removeAttr('name')
        .closest('form').submit(function () {
          hidden.val(element.intlTelInput('getNumber'));
        });
    });
  });
})(jQuery);
