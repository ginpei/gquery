describe('gQuery.extend()', function() {
	var source, props, returned;
	beforeEach(function() {
		source = { a: 1, b: 2 };
		props1 = {       b:12, c:13 };
		props2 = {       b:22,       d:24 };

		returned = gQuery.extend(source, props1, props2);
	});

	it('overwrites props', function() {
		expect(source.a).toBe(1);
		expect(source.b).toBe(22);
		expect(source.c).toBe(13);
		expect(source.d).toBe(24);
	});

	it('returns source object', function() {
		expect(returned).toBe(source);
	});
});
