const reverseString = require("../codes/reverseString");
const str = "string";

test("is reversed", () => {
  expect(reverseString(str)).toMatch(str.split("").reverse().join(""));
});
