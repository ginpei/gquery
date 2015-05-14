(function(window, document) {
var gQuery=
window.gQuery = (function() {
	var $ = gQuery;
	var $$ = $.fn = $.prototype;
	var f_forEach = [].forEach;

	function gQuery(selector, context) {
		if (this instanceof $) {
			return this._initialize(selector, context);
		}
		else {
			return new $(selector, context);
		}
	}

	$$._initialize = function(arg0, context) {
		var that = this;

		var nodes;
		if (typeof arg0 === 'string') {
			nodes = (context || document).querySelectorAll(arg0);
		}
		else if ('length' in arg0) {
			nodes = arg0;
		}
		else {
			nodes = [arg0];
		}

		that.length = nodes.length;
		f_forEach.call(nodes, function(el, index) {
			that[index] = el;
		});

		return that;
	};

	$$.forEach = function(fn) {
		f_forEach.call(this, fn);
		return this;
	};

	return $;
})();

gQuery.extend = function(source, props) {
	for (var name in props) { source[name] = props[name]; }
	return source;
};

gQuery.fn.attr = function(name, value) {
	// getter
	if (arguments.length < 2) {
		var el = this[0];
		return el && el.getAttribute(name);
	}
	// setter
	else {
		this.forEach(function(el, index) {
			el.setAttribute(name, value);
		});
		return this;
	}
};

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

gQuery.fn.on = function(type, listener) {
	this.forEach(function(el, index) {
		el.addEventListener(type, listener, false);
	});
	return this;
};

})(window, document)