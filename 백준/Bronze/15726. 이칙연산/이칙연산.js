// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')

const [A, B, C] = input.map(Number)

console.log(parseInt(Math.max((A*B)/C, (A/B)*C)))