gQuery.fn.val = function(value) {
	// getter
	if (arguments.length < 1) {
		if (this.length > 1) {
			var el = this[0];
			return el.value;
		}
		// else {
		// 	return undefined;
		// }
	}
	// setter
	else {
		this.forEach(function(el, index) {
			el.value = value;
		});
		return this;
	}
};
