const calculator = require("../codes/calculator");
const num1 = 3;
const num2 = 4;

test("calculator add", () => {
  expect(calculator.add(num1, num2)).toBeCloseTo(num1 + num2);
});

test("calculator subtract", () => {
  expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
});

test("calculator divide", () => {
  expect(calculator.divide(num1, num2)).toBe(num1 / num2);
});

test("calculator multiply", () => {
  expect(calculator.multiply(num1, num2)).toBeCloseTo(num1 * num2);
});
