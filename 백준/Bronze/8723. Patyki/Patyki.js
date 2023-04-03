
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [A, B, C] = input.map(Number).sort((a, b) => a - b)
const sqrt = Math.sqrt((A ** 2) + (B ** 2))

if (A === B && B === C) {
  console.log(2)
} else if (sqrt === C) {
  console.log(1)
} else {
  console.log(0)
}