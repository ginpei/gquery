function elem(tagName) {
	return document.createElement(tagName);
}

describe('Constructor', function() {
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
