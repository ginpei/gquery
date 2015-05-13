describe('Core', function() {
	var el, elChild1, elChild1_1, elChild2;
	beforeEach(function() {
		el = test_helper.elem(
			'<div id="root">' +
				'<div id="child1">' +
					'<div id="child1_1"></div>' +
				'</div>' +
				'<div id="child2"></div>' +
			'</div>');
		elChild1 = el.querySelector('#child1');
		elChild1_1 = el.querySelector('#child1_1');
		elChild2 = el.querySelector('#child2');
	});

	describe('node collection', function() {
		it('finds from specified context', function() {
			expect(gQuery('#child1', el)[0]).toBe(elChild1);
		});

		it('has the count of elements', function() {
			var $els = gQuery('div', el);
			expect($els.length).toBe(3);
		});

		it('has each elements in order', function() {
			var $els = gQuery('div', el);
			expect($els[0]).toBe(elChild1);
			expect($els[1]).toBe(elChild1_1);
			expect($els[2]).toBe(elChild2);
		});
	});

	describe('element finder', function() {
		it('finds the element by selector', function() {
			expect(gQuery('body')[0]).toBe(document.body);
		});

		it('finds the element by Node', function() {
			expect(gQuery(document.querySelector('body'))[0]).toBe(document.body);
		});

		it('finds the element by NodeList', function() {
			expect(gQuery(document.querySelectorAll('body'))[0]).toBe(document.body);
		});
	});

	describe('forEach()', function() {
		var $el;
		beforeEach(function() {
			$el = gQuery('div', el);
			returned = $el.forEach(function(el, index) {
				el.setAttribute('data-index', index);
			});
		});

		it('runs callback function for each elements with each index number', function() {
			expect(elChild1.getAttribute('data-index')).toBe('0');
			expect(elChild1_1.getAttribute('data-index')).toBe('1');
			expect(elChild2.getAttribute('data-index')).toBe('2');
		});

		it('returns own self', function() {
			expect(returned).toBe($el);
		});
	});
});
