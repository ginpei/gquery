describe('eq()', function() {
	var $el;

	beforeEach(function() {
		$el= gQuery(test_helper.elem(
			'<div id="el-1"></div>' +
			'<div id="el-2"></div>' +
			'<div id="el-3"></div>'
		));
	});

	it('returns the element at specified position', function() {
		var $result = $el.eq(1);
		expect($result.length).toBe(1);
		expect($result[0]).toBe($el[1]);
	});

	it('returns no elements for invalid index', function() {
		var $result = $el.eq(-1);
		expect($result.length).toBe(0);
	});
});
