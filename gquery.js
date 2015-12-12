window.gQuery = (function() {
	var $ = gQuery;
	var $$ = $.fn = $.prototype;
	var f_forEach = [].forEach;

	function gQuery(selector, context) {
		if (this instanceof $) {
			return this._initialize(selector, context);
		}
		else {
			return new $(selector, context);
		}
	}

	$$._initialize = function(arg0, context) {
		var that = this;

		var nodes;
		if (typeof arg0 === 'string') {
			nodes = (context || document).querySelectorAll(arg0);
		}
		else if (arg0 && 'length' in arg0) {
			nodes = arg0;
		}
		else {
			nodes = (arg0 ? [arg0] : []);
		}

		that.length = nodes.length;
		f_forEach.call(nodes, function(el, index) {
			that[index] = el;
		});

		return that;
	};

	$$.forEach = function(fn) {
		f_forEach.call(this, fn);
		return this;
	};

	return $;
})();
