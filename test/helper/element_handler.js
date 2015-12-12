window.test_helper = {
	elem: function(html) {
		var el = document.createElement('div');
		el.innerHTML = html;
		var children = el.childNodes;
		if (children.length > 1) {
			var els = [];
			var child=children[0];
			while (child) {
				el.removeChild(child);
				els.push(child);
				child = children[0];
			}
			return els;
		}
		else {
			var child = children[0];
			el.removeChild(child);
			return child;
		}
	}
};
