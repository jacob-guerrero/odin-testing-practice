const capitalize = require("../codes/capitalize");
const str = "hello world";

test("first character is capitalized", () => {
  expect(capitalize(str).charAt(0) === str.charAt(0).toUpperCase()).toBeTruthy();
});
