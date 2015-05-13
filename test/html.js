describe('html()', function() {
	describe('getter', function() {
		var $el, returned;
		beforeEach(function() {
			var el = test_helper.elem(
				'<div><div id="child1"></div></div>' +
				'<div><div id="child2"></div></div>');
			$el = gQuery(el);
			returned = $el.html();
		});

		it('returns inner HTML of the first element', function() {
			expect(returned).toBe('<div id="child1"></div>');
		});

		it('returns undefined if there are no elements', function() {
			$el = gQuery('#nothing');
			returned = $el.html();
			expect(returned).toBeUndefined();
		});
	});

	describe('setter', function() {
		var $el, returned;
		beforeEach(function() {
			var el = test_helper.elem('<div><div id="child1"></div></div><div></div>');
			$el = gQuery(el);
			returned = $el.html(
				'<div id="child2" class="child"></div>' +
				'<div id="child3"></div>');
		});

		it('overwrites inner HTML for each elements', function() {
			var elChild1_2 = $el[0].childNodes[0];
			var elChild1_3 = $el[0].childNodes[1];
			expect(elChild1_2.id).toBe('child2');
			expect(elChild1_2.classList.contains('child')).toBeTruthy();
			expect(elChild1_3.id).toBe('child3');

			var elChild2_2 = $el[1].childNodes[0];
			var elChild2_3 = $el[1].childNodes[1];
			expect(elChild2_2.id).toBe('child2');
			expect(elChild2_2.classList.contains('child')).toBeTruthy();
			expect(elChild2_3.id).toBe('child3');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});

	describe('constructor', function() {
		it('makes new element on the constructor', function() {
			var $el = gQuery(
				'<div><div id="child1"></div></div>' +
				'<div><div id="child2"></div></div>');
			expect($el.length).toBe(2);
			expect($el[0].firstChild.id).toBe('child1');
			expect($el[1].firstChild.id).toBe('child2');
		});
	});
});
