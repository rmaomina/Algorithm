// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const X = require('fs').readFileSync(path).toString().trim()

console.log(String(BigInt(X) ** 3n))