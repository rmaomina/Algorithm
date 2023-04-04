
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")
.map(Number)

const maxNum = Math.max(...input)
let result = 0;

for (let num of input) {
  result += Math.abs(maxNum - num)
}

console.log(result)
