window.gQuery = (function() {
	var $ = gQuery;
	var $$ = $.fn = $.prototype;
	var f_forEach = [].forEach;

	function gQuery(selector) {
		if (this instanceof $) {
			return this._initialize(selector);
		}
		else {
			return new $(selector);
		}
	}

	$$._initialize = function(selector) {
		var that = this;

		var nodes = that.nodeList = document.querySelectorAll(selector);
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
