gQuery.fn.remove = function() {
	this.forEach(function(el, index) {
		var parent = el.parentNode;
		if (parent) {
			parent.removeChild(el);
		}
	});
	return this;
};
