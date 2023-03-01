
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [A, B] = input.map(Number);

if (A === B) {
  console.log(0)
} else if (A < B) {
  console.log(-1)
} else {
  console.log(1)
}