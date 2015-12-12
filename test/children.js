describe('children()', function() {
	describe('without arguments', function() {
		var $el, $elRoot;
		beforeEach(function() {
			$elRoot = gQuery(test_helper.elem(
				'<div>' +
					'<div id="child1" data-foo="bar">' +
						'<div id="child1_1"></div>' +
					'</div>' +
					'<div id="child2" data-foo="bar"></div>' +
					'<div id="child3" data-foo="poo"></div>' +
				'</div>'
			));
			$el = $elRoot.children();
		});

		it('finds all children', function() {
			expect($el.length).toBe(3);
			expect($el[0].id).toBe('child1');
			expect($el[1].id).toBe('child2');
			expect($el[2].id).toBe('child3');
		});
	});

	describe('with selector', function() {
		var $el, $elRoot;
		beforeEach(function() {
			$elRoot = gQuery(test_helper.elem(
				'<div>' +
					'<div id="child1" data-foo="bar">' +
						'<div id="child1_1"></div>' +
					'</div>' +
					'<div id="child2" data-foo="bar"></div>' +
					'<div id="child3" data-foo="poo"></div>' +
				'</div>'
			));
			$el = $elRoot.children('[data-foo=bar]');
		});

		it('finds only matched children', function() {
			expect($el.length).toBe(2);
			expect($el[0].id).toBe('child1');
			expect($el[1].id).toBe('child2');
		});
	});
});
