gQuery.fn.children = function(selector) {
	var els = [];
	this.forEach(function(el) {
		var children = el.childNodes;
		for (var i=0, l=children.length; i<l; i++) {
			var child = children[i];
			if (!selector || child.matches(selector)) {
				els.push(child);
			}
		}
	});
	return gQuery(els);
};
