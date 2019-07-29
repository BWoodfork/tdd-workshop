const stringCalculator = require("./solution/string-calculator")

function run() {
  const firstArg = process.argv.slice(2)[0]
  const result = stringCalculator.calculate(firstArg)

  console.log(result)
}

run()