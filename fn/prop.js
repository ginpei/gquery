gQuery.fn.prop = function(name, value) {
	// getter
	if (arguments.length < 2) {
		if (this.length > 1) {
			var el = this[0];
			return el[name];
		}
		// else {
		// 	return undefined;
		// }
	}
	// setter
	else {
		this.forEach(function(el, index) {
			el[name] = value;
		});
		return this;
	}
};
