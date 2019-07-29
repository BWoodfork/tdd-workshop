const stringCalculator = require("../../src/exercise/string-calculator")
// Write a program that takes a string, for example: '5+5'
// And provides the sum result of the expression.
// Your program should be able to add and subtract any two
// numbers

test("10 should return 10", () => {
  expect(stringCalculator.calculate("10")).toBe("10")
})

test("20 should return 20", () => {
  expect(stringCalculator.calculate("20")).toBe("20")
})

test("1+1 should return 2", () => {
  expect(stringCalculator.calculate("1+1")).toBe("2")
})

test("2+2 should return 4", () => {
  expect(stringCalculator.calculate("2+2")).toBe("4")
})

test("101+20 should return 121", () => {
  expect(stringCalculator.calculate("101+20")).toBe("121")
})

test("100-50 should return 50", () => {
  expect(stringCalculator.calculate("100-50")).toBe("50")
})

test("returns 0 when given an empty string", () => {
  expect(stringCalculator.calculate("")).toBe("0")
})
