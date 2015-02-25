(function($) {
    $(document).ready(function() {
        $('.to-the-top').topify({
            offset: $('header').height()
        });

        console.log('hi');
    });
})(jQuery);