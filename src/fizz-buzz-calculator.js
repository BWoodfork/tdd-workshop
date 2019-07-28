function calculate(num) {
  if ((num % 3 === 0) && (num % 5 === 0)) {
    return "fizz buzz"
  } else if (num % 3 === 0) {
    return "fizz"
  } else if (num % 5 === 0) {
    return "buzz"
  }

  return num
}

module.exports = calculate;