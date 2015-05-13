gQuery.extend = function(source, props) {
	for (var name in props) { source[name] = props[name]; }
};
