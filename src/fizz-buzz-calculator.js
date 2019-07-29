module.exports = {
  calculate: function (num) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
      return "fizz buzz"
    } else if (num % 3 === 0) {
      return "fizz"
    } else if (num % 5 === 0) {
      return "buzz"
    }

    return num
  },

  calculateAllNumbers: function(numberRange) {
    return numberRange.map(num => {
      return this.calculate(num)
    })
  }
}