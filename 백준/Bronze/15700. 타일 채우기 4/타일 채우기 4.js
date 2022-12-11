// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')

const [N, M] = input.map(BigInt)

console.log(BigInt(N * M / 2n).toString())