const calculator = require("../src/fizz-buzz-calculator")
// const calculate = require('../src/fizz-buzz-calculator');
// const calculateAllNumbers = require('../src/fizz-buzz-calculator');

// "Write a program that returns the numbers from 1 to 100. 
// But for multiples of three returns “Fizz” instead of the number
// and for the multiples of five returns “Buzz”.
// For numbers which are multiples of both three and five returns “FizzBuzz”."
// For numbers that are not multiples of either 3 nor 5, simply returns the number.

test("3 returns fizz", () => {
  expect(calculator.calculate(3)).toBe("fizz")
})

test("5 returns buzz", () => {
  expect(calculator.calculate(5)).toBe("buzz")
})

test("6 returns fizz", () => {
  expect(calculator.calculate(6)).toBe("fizz")
})

test("10 returns buzz", () => {
  expect(calculator.calculate(10)).toBe("buzz")
})

test("15 returns fizz buzz", () => {
  expect(calculator.calculate(15)).toBe("fizz buzz")
})

test("30 returns fizz buzz", () => {
  expect(calculator.calculate(30)).toBe("fizz buzz")
})

test("multiples of 3 fizz", () => {
  const multiplesOfThree = [...Array(100).keys()].filter(num => {
    return (num % 3 === 0) && !(num % 5 === 0)
  })

  multiplesOfThree.map(num => {
    expect(calculator.calculate(num)).toBe("fizz")
  })
})

test("multiples of both 3 and 5 returns fizz", () => {
  const multiplesOfThree = [...Array(100).keys()].filter(num => {
    return num % 3 === 0 && num % 5 === 0
  })

  multiplesOfThree.map(num => {
    expect(calculator.calculate(num)).toBe("fizz buzz")
  })
})

test("1 returns 1", () => {
  expect(calculator.calculate(1)).toBe(1)
})

test("2 returns 2", () => {
  expect(calculator.calculate(2)).toBe(2)
})

test("returns a collection of fizz for each multiple of 3", () => {
  const numberRange = [3, 6, 9]

  expect(calculator.calculateAllNumbers(numberRange)).toEqual([
    "fizz",
    "fizz",
    "fizz"
  ])
})

test("returns a collection of buzz for each multiple of 5", () => {
  const numberRange = [5, 10]

  expect(calculator.calculateAllNumbers(numberRange)).toEqual([
    "buzz",
    "buzz"
  ])
})


test("returns a collection of fizz buzz for each multiple of 5 and 3", () => {
  const numberRange = [15, 30]

  expect(calculator.calculateAllNumbers(numberRange)).toEqual([
    "fizz buzz",
    "fizz buzz"
  ])
})