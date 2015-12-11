describe('filter()', function() {
	var $el;

	beforeEach(function() {
		$el= gQuery(test_helper.elem(
			'<div id="el-1" data-foo="bar"></div>' +
			'<div id="el-2" data-foo="bar"></div>' +
			'<div id="el-3" data-foo="boo"></div>'
		));
	});

	it('returns only matched elements', function() {
		var $filtered = $el.filter('div[data-foo=bar]');
		expect($filtered.length).toBe(2);
		expect($filtered[0]).toBe($el[0]);
		expect($filtered[1]).toBe($el[1]);
	});

	it('returns no elements if nothing is matched', function() {
		var $filtered = $el.filter('div[data-foo=poo]');
		expect($filtered.length).toBe(0);
	});

	it('returns whole elements as a new instance if everything is matched', function() {
		var $filtered = $el.filter('div[data-foo]');
		expect($filtered.length).toBe(3);
		expect($filtered[0]).toBe($el[0]);
		expect($filtered[1]).toBe($el[1]);
		expect($filtered[2]).toBe($el[2]);
		expect($filtered).not.toBe($el);
	});
});
