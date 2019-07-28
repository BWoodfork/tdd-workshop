const calculate = require('../src/fizz-buzz-calculator');

// "Write a program that returns the numbers from 1 to 100. 
// But for multiples of three returns “Fizz” instead of the number
// and for the multiples of five returns “Buzz”.
// For numbers which are multiples of both three and five returns “FizzBuzz”."
// For numbers that are not multiples of either 3 nor 5, simply returns the number.

test("3 returns fizz", () => {
  expect(calculate(3)).toBe("fizz")
})

test("5 returns buzz", () => {
  expect(calculate(5)).toBe("buzz")
})

test("6 returns fizz", () => {
  expect(calculate(6)).toBe("fizz")
})

test("10 returns buzz", () => {
  expect(calculate(10)).toBe("buzz")
})

test("15 returns fizz buzz", () => {
  expect(calculate(15)).toBe("fizz buzz")
})

test("30 returns fizz buzz", () => {
  expect(calculate(30)).toBe("fizz buzz")
})

test("multiples of 3 fizz", () => {
  const multiplesOfThree = [...Array(100).keys()].filter(num => {
    return (num % 3 === 0) && !(num % 5 === 0)
  })

  multiplesOfThree.map(num => {
    expect(calculate(num)).toBe("fizz")
  })
})

test("multiples of both 3 and 5 returns fizz", () => {
  const multiplesOfThree = [...Array(100).keys()].filter(num => {
    return num % 3 === 0 && num % 5 === 0
  })

  multiplesOfThree.map(num => {
    expect(calculate(num)).toBe("fizz buzz")
  })
})

test("1 returns 1", () => {
  expect(calculate(1)).toBe(1)
})

test("2 returns 2", () => {
  expect(calculate(2)).toBe(2)
})