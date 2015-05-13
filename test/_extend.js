describe('gQuery.extend()', function() {
	var source, props, returned;
	beforeEach(function() {
		source = { a:1, b:2 };
		props = { b:12, c:13 };

		returned = gQuery.extend(source, props);
	});

	it('overwrites props', function() {
		expect(source.a).toBe(1);
		expect(source.b).toBe(12);
		expect(source.c).toBe(13);
	});
});
