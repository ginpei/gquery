// Dependences
// prop
gQuery.fn.val = function(value) {
	if (arguments.length < 1) {
		return this.prop('value');
	}
	else {
		return this.prop('value', value);
	}
};
