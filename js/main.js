(function($) {
    $(document).ready(function() {
        $('#to-the-top').topify({
            offset: $('header').height()
        });

        $('blockquote').topify({
            el: $('blockquote').prev(),
            offset: 300,
            classToAssign: 'slideUp',
            clickable: false
        });
    });
})(jQuery);