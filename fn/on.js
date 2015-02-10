gQuery.fn.on = function(type, listener) {
	this.forEach(function(el, index) {
		el.addEventListener(type, listener, false);
	});
	return this;
};
