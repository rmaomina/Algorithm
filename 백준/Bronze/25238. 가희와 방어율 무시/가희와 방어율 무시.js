// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const [a, b] = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
let answer = (a - a * (b / 100)) >= 100 ? 0 : 1
console.log(answer)