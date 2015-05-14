gQuery.extend = function(source /*, ... */) {
	var args = Array.prototype.slice.call(arguments, 1);
	args.forEach(function(props) {
		for (var name in props) { source[name] = props[name]; }
	});
	return source;
};
