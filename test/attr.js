describe('attr()', function() {
	var $el;
	beforeEach(function() {
		$el = gQuery(test_helper.elem(
			'<div id="child1"></div>' +
			'<div id="child2"></div>'));
	});

	describe('getter', function() {
		var returned;
		beforeEach(function() {
			$el[0].setAttribute('data-foo', 'abc-0');
			$el[1].setAttribute('data-foo', 'abc1');
			returned = $el.attr('data-foo');
		});

		it('gets an attribute value from the first element', function() {
			expect(returned).toBe('abc-0');
		});
	});

	describe('setter', function() {
		var returned;
		beforeEach(function() {
			returned = $el.attr('data-foo', 'abc');
		});

		it('sets an attribute', function() {
			expect($el[0].getAttribute('data-foo')).toBe('abc');
			expect($el[1].getAttribute('data-foo')).toBe('abc');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});
});
