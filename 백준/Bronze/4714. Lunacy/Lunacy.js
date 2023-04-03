
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")
.map(Number)

let result = ""

for (let i = 0; i < input.length - 1; i++) {
  const weightOnEarth = input[i];
  const weightOnMoon = weightOnEarth * 0.167;
  result += `Objects weighing ${weightOnEarth.toFixed(2)} on Earth will weigh ${weightOnMoon.toFixed(2)} on the moon.`
  result += "\n"
}

console.log(result)