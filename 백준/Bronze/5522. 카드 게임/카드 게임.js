// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)
let answer = input.reduce((a, c) => a + c, 0)

console.log(answer)