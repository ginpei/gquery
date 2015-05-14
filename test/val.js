describe('val()', function() {
	var $el;
	beforeEach(function() {
		$el = gQuery(test_helper.elem(
			'<input id="input1" type="text" value="hoge" />' +
			'<input id="input2" type="text" />'));
	});

	describe('getter', function() {
		var returned;
		beforeEach(function() {
			$el[0].value = 'abc-0';
			$el[1].value = 'abc-1';
		});

		it('gets an attribute value from the only element', function() {
			$el = gQuery($el[0]);
			returned = $el.val();
			expect(returned).toBe('abc-0');
		});

		it('gets an attribute value from the first element', function() {
			returned = $el.val();
			expect(returned).toBe('abc-0');
		});

		it('returns undefined if there are no elements', function() {
			$el = gQuery('#nothing');
			returned = $el.val();
			expect(returned).toBeUndefined();
		});

		it('returns undefined if the elements does not have any values', function() {
			$el = gQuery('<div>');
			returned = $el.val();
			expect(returned).toBeUndefined();
		});
	});

	describe('setter', function() {
		var returned;
		beforeEach(function() {
			returned = $el.val('abc');
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
