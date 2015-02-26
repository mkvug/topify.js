(function($) {
    $(document).ready(function() {
        $('.to-the-top').topify({
            offset: $('header').height()
        });

        $('figure.full').topify({
            el: $('figure.full').prev(),
            offset: 300,
            classToAssign: 'slideUp',
            clickable: false
        });
    });
})(jQuery);