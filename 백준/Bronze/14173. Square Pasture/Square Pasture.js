
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

const [x1, y1, x2, y2] = input[0].split(" ").map(Number)
const [x3, y3, x4, y4] = input[1].split(" ").map(Number)

const a = Math.max(x2, x4) - Math.min(x1, x3)
const b = Math.max(y2, y4) - Math.min(y1, y3)

console.log(Math.max(a, b) ** 2);