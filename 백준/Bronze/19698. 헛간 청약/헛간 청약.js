// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [N, W, H, L] = input.map(Number)

const width = parseInt(W / L)
const height = parseInt(H / L)

console.log(Math.min(width * height, N))