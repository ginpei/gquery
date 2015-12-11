gQuery.fn.is = function(selector) {
	var matched = true;
	this.forEach(function(el) {
		matched = matched && el.matches(selector);
	});
	return matched;
};
