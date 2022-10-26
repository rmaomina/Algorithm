// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [K, N, M] = input.map(Number)
if (M - (K * N) > 0) console.log(0)
else console.log(Math.abs(M - (K * N)))
