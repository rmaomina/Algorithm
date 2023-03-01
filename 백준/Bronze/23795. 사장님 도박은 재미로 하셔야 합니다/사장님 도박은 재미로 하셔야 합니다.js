
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")
.map(Number)

let index = 0
let total = 0;

while (input[index] !== -1) {
  total += input[index++];
}

console.log(total)
