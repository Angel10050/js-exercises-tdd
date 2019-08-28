let evenNumber = require("./get-even-numbers");
test("getting even numbers", function() {
  let input = [22, 13, 73, 82, 4];
  let output = evenNumber(input);
  let expected = [22, 82, 4];

  expect(expected).toEqual(output);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
