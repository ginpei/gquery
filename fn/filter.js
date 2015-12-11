gQuery.fn.filter = function(selector) {
	var els = [];
	this.forEach(function(el) {
		if (gQuery(el).is(selector)) {
			els.push(el);
		}
	});
	return gQuery(els);
};
