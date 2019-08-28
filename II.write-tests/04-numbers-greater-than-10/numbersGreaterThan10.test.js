var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  let input = [4, 10, 32, 9, 21];
  let outPut = largerThanTen(input);
  let expected = [32, 21];
  expect(outPut).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
