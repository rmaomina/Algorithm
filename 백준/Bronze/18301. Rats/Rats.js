// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
const [N1, N2, N12] = input
console.log(Math.floor((N1 + 1) * (N2 + 1) / (N12 + 1) - 1))
