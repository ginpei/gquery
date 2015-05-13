window.test_helper = {
	elem: function(html) {
		var el = document.createElement('div');
		el.innerHTML = html;
		var children = el.childNodes;
		if (children.length > 1) {
			return children;
		}
		else {
			return children[0];
		}
	}
};
