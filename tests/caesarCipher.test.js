const caesarCipher = require("../codes/caesarCipher");
const str = "hello!";
const shift = 3;

test("Caesar Cipher handles signs", () => {
  expect(caesarCipher(str, shift)).toMatch("khoor!");
});

test("caesarCipher handles empty strings", () => {
  expect(caesarCipher("", 3)).toBe("");
});

test("caesarCipher maintains the case of characters", () => {
  expect(caesarCipher("AbCdEfz.", 1)).toBe("BcDeFga.");
});
