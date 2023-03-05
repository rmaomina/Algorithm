// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [A, B] = input.map(Number)
const M = (B - A) / 400

console.log(1 / (1 + (10 ** M)))