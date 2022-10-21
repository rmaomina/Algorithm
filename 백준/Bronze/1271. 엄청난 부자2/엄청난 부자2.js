// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const [N, M] = require('fs').readFileSync(path).toString().trim().split(' ').map(BigInt)

console.log(`${N / M}\n${N % M}`)