module.exports = {
  calculate: function(number) {
    if (number === null) {
      return "input is invalid"
    }

    if (number % 3 === 0 && number % 5 === 0) {
      return "Fizz Buzz"
    }

    if (number % 3 === 0) {
      return "Fizz"
    }

    if (number % 5 === 0) {
      return "Buzz"
    }

    return number
  }
}