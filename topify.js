(function($) {
	'use strict';

	var defaults = {
		el: $('body'),
		offset: 50,
		classToAssign: null,
		clickable: true
	};

	$.fn.topify = function(options) {

		var e = this;

		var settings = $.extend({}, defaults, options);

		var isBody;
		if (settings.el.offset().top == $(window).scrollTop()) {
			isBody = true;
		} else {
			isBody = false;
		}

		$(window).scroll(function() {
			if (isBody) {
				applyEffect(settings, e, settings.el.scrollTop(), settings.offset);
			} else {
				applyEffect(settings, e, $(window).scrollTop() - $(window).height(), settings.offset - $(window).height());
			}
		});

		if (settings.clickable == true) {
			e.click(function() {
				$("html, body").animate({ scrollTop: 0 }, 100);
			});
		}

	};

	function applyEffect(settings, e, scrollPos, offset) {
		if (scrollPos >= offset) {
			if (settings.classToAssign == null) {
				e.addClass('show');
			} else {
				e.addClass(settings.classToAssign);
			}
		} else {
			if (settings.classToAssign == null) {
				e.removeClass('show');
			} else {
				e.removeClass(settings.classToAssign);
			}
		}
	}

})(jQuery);