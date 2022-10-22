// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [A, B, C] = input.map(BigInt)
console.log(String((B - C) / A))