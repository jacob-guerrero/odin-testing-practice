const analyzeArray = require("../codes/analyzeArray");

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test("analyzeArray returns object with correct values", () => {
  expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
