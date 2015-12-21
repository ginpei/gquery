gQuery.fn.css = function(name, value) {
	if (arguments.length < 2) {
		// multi setter
		if (typeof name !== 'string') {
			var attrs = name;
			for (name in attrs) {
				value = attrs[name];
				this.forEach(function(el, index) {
					el.style[name] = value;
				});
			}
			return this;
		}
		// getter
		else {
			var el = this[0];
			return el && window.getComputedStyle(el)[name];
		}
	}
	// setter
	else {
		this.forEach(function(el, index) {
			el.style[name] = value;
		});
		return this;
	}
};
