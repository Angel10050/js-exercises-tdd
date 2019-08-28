var peoples = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var output = peoples(mentors);
  var espected = peoples(mentors);

  expect(output).toEqual(espected);
});
