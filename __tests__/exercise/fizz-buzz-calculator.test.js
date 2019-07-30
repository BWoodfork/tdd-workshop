const calculator = require("../../src/exercise/fizz-buzz-calculator")

test("1 should be 1", () => {
  expect(1).toBe(1)
})

test("3 returns 'Fizz'", () => {
  expect(calculator.calculate(3)).toBe("Fizz")
})

test("5 returns 'Buzz'", () => {
  expect(calculator.calculate(5)).toBe("Buzz")
})

test("2 returns 2", () => {
  expect(calculator.calculate(2)).toBe(2)
})

test("9 returns 'Fizz'", () => {
  expect(calculator.calculate(9)).toBe("Fizz")
})

test("6 returns 'Fizz'", () => {
  expect(calculator.calculate(6)).toBe("Fizz")
})

test("10 returns 'Buzz'", () => {
  expect(calculator.calculate(10)).toBe("Buzz")
})

test("20 returns 'Buzz'", () => {
  expect(calculator.calculate(20)).toBe("Buzz")
})

test("15 returns 'Fizz Buzz'", () => {
  expect(calculator.calculate(15)).toBe("Fizz Buzz")
})

test("30 returns 'Fizz Buzz'", () => {
  expect(calculator.calculate(30)).toBe("Fizz Buzz")
})

test("null returns an error", () => {
  expect(calculator.calculate(null)).toBe("input is invalid")
})

describe("numbers that don't include multiples of 5", () => {
  test("all multiples of 3 between 1 and 100 should return 'Fizz'", () => {
    const listOfNumbers = [...Array(100).keys()]

    const multiplesOf3 = listOfNumbers.filter(num => {
      return num % 3 === 0 && num % 5 !== 0
    })

    multiplesOf3.map(num => {
      expect(calculator.calculate(num)).toBe("Fizz")
    })
  })
})