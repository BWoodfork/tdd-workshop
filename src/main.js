const calculate = require("./fizz-buzz-calculator")

function run() {
  const numberRange = [...Array(100).keys()]

  numberRange.map(num => {
    const result = calculate(num)

    console.log(result)
  })
}

run()