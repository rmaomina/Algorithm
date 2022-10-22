// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const time = BigInt(input)
console.log(String(time % 20000303n))
