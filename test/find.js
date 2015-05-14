describe('find()', function() {
	var $el, $elRoot;
	beforeEach(function() {
		$elRoot = gQuery(test_helper.elem(
			'<div>' +
				'<div id="child1">' +
					'<div id="child1_1"></div>' +
				'</div>' +
				'<div id="child2"></div>' +
			'</div>' +
			'<div>' +
				'<div id="child3"></div>' +
			'</div>'));
		$el = $elRoot.find('div');
	});

	it('finds descendant elements', function() {
		expect($el.length).toBe(4);
		expect($el[0].id).toBe('child1');
		expect($el[1].id).toBe('child1_1');
		expect($el[2].id).toBe('child2');
		expect($el[3].id).toBe('child3');
	});

	it('returns new instance', function() {
		expect($el).not.toBe($elRoot);
	});
});
