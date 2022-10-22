// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
const [N1, K1, N2, K2] = input

console.log(N1 * K1 + N2 * K2)