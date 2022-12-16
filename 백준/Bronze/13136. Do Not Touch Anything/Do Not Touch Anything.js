// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [R, C, N] = input.map(Number)

console.log(Math.ceil(R / N) * Math.ceil(C / N))
