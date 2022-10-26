// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)

const firstChild = input[1] + (input[1] - input[0])
console.log(firstChild)


