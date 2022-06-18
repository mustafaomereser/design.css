$(() => {
    $.design = function () {
        let _this = this;

        this.backdrop = function (status = true, cb = false) {
            if (status) {
                $('body').append('<div class="back-drop"></div>');
                if (cb) $('.back-drop').on('click', function () {
                    cb(this);
                });
            } else {
                $('.back-drop').off('click').remove();
            }

            return this;
        }

        return this;
    };

    Object.prototype.modal = function (status) {
        let _this = this;
        
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
    }
});