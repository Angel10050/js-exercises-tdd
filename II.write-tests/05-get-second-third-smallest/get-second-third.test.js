let secondSmall = require('./get-second-third');
test('Get second and thitd smallest', function() {
	let input = [ 90, 5, 11, 8, 6 ];
	let outPut = secondSmall(input);
	let expected = [ 6, 8 ];
	expect(outPut).toEqual(expected);
	expect(input).toEqual(outPut);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
