// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [L, A, B, C, D] = input.map(Number)

let math = Math.ceil(B / D)
let lang = Math.ceil(A / C)
console.log(L - Math.max(math, lang));