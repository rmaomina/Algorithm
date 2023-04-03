
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

let result = ""
const [n, ...numbers] = input

for (let number of numbers) {
  const [a, b, c] = number.split(" ").map(Number)
  result += Math.min(a, b, c) + "\n"
}

console.log(result)