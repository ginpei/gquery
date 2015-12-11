describe('text()', function() {
	describe('getter', function() {
		var $el;

		it('returns text of the first element', function() {
			$el = gQuery(test_helper.elem(
				'<div>Text<b>#1</b></div>' +
				'<div>Text<b>#2</b></div>'
			));
			expect($el.text()).toBe('Text#1');
		});

		it('returns undefined if there are no elements', function() {
			$el = gQuery('#nothing');
			returned = $el.text();
			expect(returned).toBeUndefined();
		});
	});

	describe('setter', function() {
		var $el, returned;
		beforeEach(function() {
			$el = gQuery(test_helper.elem(
				'<div>Text<b>#1</b></div>' +
				'<div>Text<b>#2</b></div>'
			));
			returned = $el.text('Text<b>#3</b>');
		});

		it('replaces inner elements with specified string for each elements', function() {
			expect($el[0].firstChild.nodeValue).toBe('Text<b>#3</b>');
			expect($el[1].firstChild.nodeValue).toBe('Text<b>#3</b>');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});
});
