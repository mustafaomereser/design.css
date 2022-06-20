"use strict";

$(function () {
  $.design = function () {
    var _this = this;

    this.backdrop = function () {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (status) {
        $('body').append('<div class="back-drop"></div>');
        if (cb) $('.back-drop').on('click', function () {
          cb(this);
        });
      } else {
        $('.back-drop').off('click').remove();
      }

      return this;
    };

    return this;
  };

  Object.prototype.modal = function (status) {
    var _this = this;

    switch (status) {
      case 'show':
        $('body').addClass('overflow-hidden');
        $(this).addClass('show').find('.close').on('click', function () {
          return $(_this).modal('hide');
        });
        $.design().backdrop(true, function (is) {
          $(_this).modal('hide');
          $.design().backdrop(false);
        });
        break;

      case 'hide':
        $('body').removeClass('overflow-hidden');
        $(this).removeClass('show').find('.close').off('click');
        $.design().backdrop(false);
        break;
    }

    return this;
  };

  $('[data-toggle="modal"][data-target]').on('click', function () {
    $($(this).data('target')).modal('show');
  });
});