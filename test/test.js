function elem(tagName) {
	return document.createElement(tagName);
}

describe('Constructor', function() {
	var elRoot, elChild1, elChild1_1, elChild2;
	beforeEach(function() {
		elRoot = elem('div');
		elRoot.id = 'root';

		elChild1 = elem('div');
		elChild1.id = 'child1'
		elRoot.appendChild(elChild1);

		elChild1_1 = elem('div');
		elChild1_1.id = 'child1-1'
		elChild1.appendChild(elChild1_1);

		elChild2 = elem('div');
		elChild2.id = 'child2'
		elRoot.appendChild(elChild2);
	});

	it('finds from specified context', function() {
		expect(gQuery('#child1', elRoot)[0]).toBe(elChild1);
	});

	it('has the count of elements', function() {
		var $els = gQuery('div', elRoot);
		expect($els.length).toBe(3);
	});

	it('has each elements in order', function() {
		var $els = gQuery('div', elRoot);
		expect($els[0]).toBe(elChild1);
		expect($els[1]).toBe(elChild1_1);
		expect($els[2]).toBe(elChild2);
	});

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
	var elRoot, elChild1, elChild2, $el, returned;
	beforeEach(function() {
		elRoot = elem('div');
		elRoot.id = 'root';

		elChild1 = elem('div');
		elChild1.id = 'child1'
		elRoot.appendChild(elChild1);

		elChild2 = elem('div');
		elChild2.id = 'child2'
		elRoot.appendChild(elChild2);

		$el = gQuery('div', elRoot);
		returned = $el.forEach(function(el, index) {
			el.setAttribute('data-index', index);
		});
	});

	it('runs callback function for each elements with each index number', function() {
		expect(elChild1.getAttribute('data-index')).toBe('0');
		expect(elChild2.getAttribute('data-index')).toBe('1');
	});

	it('returns own self', function() {
		expect(returned).toBe($el);
	});
});
