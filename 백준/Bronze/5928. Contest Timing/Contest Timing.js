// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [D, H, M] = input.map(Number)
const diffMin = (D - 11) * 24 * 60 + (H - 11) * 60 + M - 11;

if (diffMin < 0) console.log(-1)
else console.log(diffMin)