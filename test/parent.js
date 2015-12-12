describe('parent()', function() {
	var $el, $elRoot;
	beforeEach(function() {
		$elRoot = gQuery(test_helper.elem(
			'<div>' +
				'<div id="el1"></div>' +
			'</div>' +
			'<div>' +
				'<div id="el2"></div>' +
			'</div>'
		));
		$el = $elRoot.find('#el1, #el2');
	});

	it('return parent elements', function() {
		var result = $el.parent();
		expect(result.length).toBe(2);
		expect(result[0]).toBe($elRoot[0]);
		expect(result[1]).toBe($elRoot[1]);
	});

	it('returns empty if elements have any parent nodes', function() {
		var result = $elRoot.parent();
		var result = $el.parent().parent();
		expect(result.length).toBe(0);
	});

	it('returns empty if there are no elements', function() {
		var result = gQuery().parent();
		expect(result.length).toBe(0);
	});
});
