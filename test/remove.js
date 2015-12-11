describe('remove()', function() {
	var $el, $elRoot, el1, el2, returned;
	beforeEach(function() {
		$elRoot = gQuery(test_helper.elem(
			'<div>' +
				'<div id="el1"></div>' +
				'<div id="el2"></div>' +
				'<div id="el3"></div>' +
			'</div>'
		));
		el1 = $elRoot[0].childNodes[0];
		el2 = $elRoot[0].childNodes[1];
		$el = $elRoot.find('#el1, #el2');
		returned = $el.remove();

		$elRoot.remove();
	});

	it('removes specified elements', function() {
		expect($elRoot[0].childNodes.length).toBe(1);
		expect(el1.parentNode).toBeNull();
		expect(el2.parentNode).toBeNull();
	});

	it('does nothing if the element does not have a parent', function() {
		expect($elRoot[0].parentNode).toBeNull();
	});

	it('returns own self', function() {
		expect(returned).toBe($el);
	});
});
