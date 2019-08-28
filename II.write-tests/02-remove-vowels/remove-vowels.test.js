var nombre = require("./remove-vowels");
test("remove vowels from word", function() {
  var result = nombre("samuel");
  var output = nombre(result);
  console.log(output);
  expect(output).toEqual(result);
});
