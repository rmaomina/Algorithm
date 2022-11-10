// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ')
.map(Number)

const [A, B, C, D] = input.sort((a, b) => b - a)
console.log(Math.abs(A + D - (B + C)))
