
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ')

const [h, m] = input.map(Number)

console.log((h - 9) * 60 + m)