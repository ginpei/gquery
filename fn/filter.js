gQuery.fn.filter = function(selector) {
	var els = [];
	this.forEach(function(el) {
		if (el.matches(selector)) {
			els.push(el);
		}
	});
	return gQuery(els);
};
