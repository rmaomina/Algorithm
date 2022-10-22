// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [total, diff] = input.map(BigInt)
const half = (total - diff) / 2n
console.log(`${half + diff}\n${half}`)