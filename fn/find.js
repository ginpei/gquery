gQuery.fn.find = function(selector) {
	var els = [];
	this.forEach(function(el) {
		gQuery(selector, el).forEach(function(el) {
			els.push(el);
		});
	});
	return gQuery(els);
};
