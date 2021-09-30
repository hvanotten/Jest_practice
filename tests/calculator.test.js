const calculator = require("../practice/calculator");

test("Calculator test", () => {
    expect(calculator.add(12, 4)).toBe(16);
})

test("Calculator test2", () => {
  expect(calculator.sub(12, 6)).toBe(6);
});

test("Calculator test3", () => {
  expect(calculator.div(12, 6)).toBe(2);
});

test("Calculator test4", () => {
  expect(calculator.mult(4, 5)).toBe(20);
});