// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const A = BigInt(input[1])
const B = BigInt(input[2])
const multiply = A * B
console.log(multiply.toString())
