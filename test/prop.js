describe('prop()', function() {
	var $el;
	beforeEach(function() {
		$el = gQuery(test_helper.elem(
			'<input value="hoge" />' +
			'<input />'));
	});

	describe('getter', function() {
		var returned;
		beforeEach(function() {
			$el[0].value = 'abc-0';
			$el[1].value = 'abc-1';
			returned = $el.prop('value');
		});

		it('gets an attribute value from the first element', function() {
			expect(returned).toBe('abc-0');
		});

		it('returns undefined if there are no elements', function() {
			$el = gQuery('#nothing');
			returned = $el.prop('value');
			expect(returned).toBeUndefined();
		});
	});

	describe('setter', function() {
		var returned;
		beforeEach(function() {
			returned = $el.prop('value', 'abc');
		});

		it('sets an attribute', function() {
			expect($el[0].value).toBe('abc');
			expect($el[1].value).toBe('abc');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});
});
