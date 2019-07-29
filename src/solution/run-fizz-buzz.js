const calculator = require("./solution/fizz-buzz-calculator")

function run() {
  const numberRange = [...Array(100).keys()]
  const result = calculator.calculateAllNumbers(numberRange)

  console.log(result)
}

run()