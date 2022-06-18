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
        $(this).addClass('show');
        $.design().backdrop(true, function (is) {
          $(_this).modal('hide');
          $.design().backdrop(false);
        });
        break;

      case 'hide':
        $(this).removeClass('show');
        $.design().backdrop(false);
        break;
    }

    return this;
  };
});