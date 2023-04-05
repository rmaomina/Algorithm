
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [a, b] = input.map(Number)
const short = (a + b) % 12

console.log(short === 0 ? 12 : short)
