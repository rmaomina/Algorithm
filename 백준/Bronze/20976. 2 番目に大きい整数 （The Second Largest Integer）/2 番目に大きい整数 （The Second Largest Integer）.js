
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const sorted = input.map(Number).sort((a, b) => a - b)

console.log(sorted[1])