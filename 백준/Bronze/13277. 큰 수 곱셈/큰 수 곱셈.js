// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const num1 = BigInt(input[0])
const num2 = BigInt(input[1])

console.log(String(num1 * num2))
