gQuery.fn.find = function(selector) {
	var trimmed = String.trim(selector);
	if (trimmed.charAt(0) === '>') {
		return this.children(trimmed.slice(1));
	}
	else {
		var els = [];
		this.forEach(function(el) {
			gQuery(selector, el).forEach(function(el) {
				els.push(el);
			});
		});
		return gQuery(els);
	}
};
