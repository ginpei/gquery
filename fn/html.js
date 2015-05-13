gQuery.fn.html = function(html) {
	if (arguments.length < 1) {
		if (this.length > 0) {
			return this[0].innerHTML;
		}
		// else {
		// 	return undefined;
		// }
	}
	else {
		this.forEach(function(el) {
			el.innerHTML = html;
		});
		return this;
	}
};
gQuery.fn._initialize = (function() {
	var f_initialize = gQuery.fn._initialize;
	return function(arg0, context) {
		if (typeof arg0 === 'string' && arg0[0] === '<') {
			var elOuter = document.createElement('div');
			elOuter.innerHTML = arg0;
			arg0 = elOuter.childNodes;
		}

		return f_initialize.call(this, arg0, context);
	};
})();
