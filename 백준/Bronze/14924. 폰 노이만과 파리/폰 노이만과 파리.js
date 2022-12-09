// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [S, T, D] = input.map(Number)

let result = D / (S * 2)

console.log(result * T)
