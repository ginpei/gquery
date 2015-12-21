describe('css()', function() {
	var $el;
	beforeEach(function() {
		$el = gQuery(test_helper.elem(
			'<div style="display:table"></div>' +
			'<div></div>'));
	});

	describe('getter', function() {
		var returneds;
		beforeEach(function() {
			returneds = [
				gQuery($el[0]).css('display'),
				gQuery($el[1]).css('display'),
				gQuery($el[2]).css('display')
			];
		});

		it('gets the specified value in style attribute', function() {
			expect(returneds[0]).toBe('table');
		});

		it('gets the default value', function() {
			expect(returneds[1]).toBe('block');
		});
	});

	describe('setter', function() {
		var returned;
		beforeEach(function() {
			returned = $el.css('display', 'inline');
		});

		it('sets an attribute', function() {
			expect($el[0].style.display).toBe('inline');
			expect($el[1].style.display).toBe('inline');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});

	describe('multi setter', function() {
		var returned;
		beforeEach(function() {
			returned = $el.css({ color:'red', display:'inline' });
		});

		it('sets an attribute', function() {
			expect($el[0].style.color).toBe('red');
			expect($el[1].style.color).toBe('red');
			expect($el[0].style.display).toBe('inline');
			expect($el[1].style.display).toBe('inline');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});
});
