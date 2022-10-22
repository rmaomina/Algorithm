// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const [a, b] = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)
console.log(b - a)