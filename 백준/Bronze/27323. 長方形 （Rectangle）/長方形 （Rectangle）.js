
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const result = input.reduce((a,c) => +a * +c, 1)

console.log(result)

