// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const array = input[1].split('').map(Number)

console.log(array.reduce((a, c) => a + c))