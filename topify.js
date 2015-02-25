(function($) {
	'use strict';

	var defaults = {
		el: $('body'),
		offset: 50
	};

	$.fn.topify = function(options) {

		var e = this;

		var settings = $.extend({}, defaults, options);

		$(window).scroll(function() {
			if (settings.el.scrollTop() >= settings.offset) {
				e.addClass('show');
			} else {
				e.removeClass('show');
			}
		});

		e.click(function() {
			$("html, body").animate({ scrollTop: 0 }, 100);
		});

	};

})(jQuery);