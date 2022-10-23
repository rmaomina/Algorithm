// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [A, B] = input.map(el => el.split(' ').map(Number))

console.log(Math.min(A[0] + B[1], A[1] + B[0]))