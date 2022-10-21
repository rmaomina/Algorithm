// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)

let sum = input.reduce((a, c) => a + c)
let minute = Math.floor(sum / 60)
let second = sum % 60

console.log(`${minute}\n${second}`)