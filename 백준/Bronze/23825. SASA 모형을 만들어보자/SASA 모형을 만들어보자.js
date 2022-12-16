// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [S, A] = input.map(Number)

console.log(Math.floor(Math.min(S, A) / 2))

