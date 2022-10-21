// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)

console.log(Math.abs(input[0] - input[1]))