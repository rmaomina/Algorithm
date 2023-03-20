// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

const square = parseInt(input)
const wall = Math.sqrt(square)

console.log(wall * 4)
