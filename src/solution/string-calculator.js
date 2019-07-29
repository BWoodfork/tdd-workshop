module.exports = {
  calculate: function (expression) {
    if (expression.length === 0) {
      return "0"
    }

    if (expression.includes("+")) {
      return this.sum(expression)
    }

    if (expression.includes("-")) {
      return this.subtract(expression)
    }

    return expression
  },

  sum: function (expression) {
    const [firstNum, secondNum] = expression.split("+")
    const parseFirstNum = parseInt(firstNum)
    const parseSecondNum = parseInt(secondNum)
    const result = parseFirstNum + parseSecondNum

    return result.toString()

  },

  subtract: function (expression) {
    const [firstNum, secondNum] = expression.split("-")
    const parseFirstNum = parseInt(firstNum)
    const parseSecondNum = parseInt(secondNum)
    const result = parseFirstNum - parseSecondNum

    return result.toString()
  }
}