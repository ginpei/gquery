gQuery.fn.text = function(text) {
	if (arguments.length < 1) {
		if (this.length > 0) {
			return this[0].textContent;
		}
		// else {
		// 	return undefined;
		// }
	}
	else {
		this.forEach(function(el) {
			el.textContent = text;
		});
		return this;
	}
};
