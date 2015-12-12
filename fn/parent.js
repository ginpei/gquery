gQuery.fn.parent = function(selector) {
	var els = [];
	this.forEach(function(el) {
		var parent = el.parentNode;
		if (parent) {
			els.push(parent);
		}
	});
	return gQuery(els);
};
