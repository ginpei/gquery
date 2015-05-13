describe('on()', function() {
	var $el, clicked, returned;
	beforeEach(function() {
		var el = test_helper.elem('<div>');
		$el = gQuery(el);
		returned = $el.on('click', function(event) {
			clicked++;
		});

		clicked = 0;
		el.click();
	});

	it('add an event listener', function() {
		expect(clicked).toBe(1);
	});

	it('returns own self', function() {
		expect(returned).toBe($el);
	});
});
