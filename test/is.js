describe('is()', function() {
	var $el;

	describe('for an element', function() {
		beforeEach(function() {
			$el= gQuery(test_helper.elem(
				'<div id="myId" data-foo="bar"></div>'
			));
		});

		it('returns true if matched', function() {
			expect($el.is('div#myId[data-foo=bar]')).toBeTruthy();
		});

		it('returns false if not matched', function() {
			expect($el.is('div#myid[data-foo=bar]')).toBeFalsy();
		});
	});

	describe('for some elements', function() {
		beforeEach(function() {
			$el= gQuery(test_helper.elem(
				'<div id="myId-1" data-foo="bar"></div>' +
				'<div id="myId-2" data-foo="bar"></div>'
			));
		});

		it('returns true if everything is matched', function() {
			expect($el.is('div[data-foo=bar]')).toBeTruthy();
		});

		it('returns true if something is not matched', function() {
			expect($el.is('div#myId-1[data-foo=bar]')).toBeFalsy();
		});
	});
});
