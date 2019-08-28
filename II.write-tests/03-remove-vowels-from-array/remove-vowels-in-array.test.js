var removeVowelsForWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  let input = ["irina", "etza", "Daniel"];
  let outPut = removeVowelsForWords(input);
  let expected = ["rn", "tz", "Dnl"];
  expect(outPut).toEqual(expected);
});

// example
// input: ["rina", "Etza", "Daniel"]
// expected  ["rn", "tz", "Dnl"]
