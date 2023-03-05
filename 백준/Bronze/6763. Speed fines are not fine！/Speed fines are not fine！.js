// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [limit, speed] = input.map(Number)
const diff = speed - limit;

if (diff > 30) {
  console.log(`You are speeding and your fine is $500.`)
} else if (diff > 20) {
  console.log(`You are speeding and your fine is $270.`)
} else if (diff > 1) {
  console.log(`You are speeding and your fine is $100.`)
} else {
  console.log(`Congratulations, you are within the speed limit!`)
}