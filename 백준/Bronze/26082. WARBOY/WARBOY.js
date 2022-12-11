// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [A, B, C] = input.map(Number)

const quality = B / A * 3 * C
console.log(quality)