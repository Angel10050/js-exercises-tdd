let getLargestNumber = require('./largest-number');
test('output largest Numbers', function() {
	let input = [ 3, 21, 88, 4, 36 ];
	let output = getLargestNumber(input);
	let expected = 88;

	expect(output).toEqual(expected);
});
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
