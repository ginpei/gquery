gQuery.fn.attr = function(name, value) {
	// getter
	if (arguments.length < 2) {
		var el = this[0];
		return el && el.getAttribute(name);
	}
	// setter
	else {
		this.forEach(function(el, index) {
			el.setAttribute(name, value);
		});
		return this;
	}
};
