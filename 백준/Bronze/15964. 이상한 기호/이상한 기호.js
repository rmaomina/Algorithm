// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')

const A = +input[0]
const B = +input[1]

console.log((A + B) * (A - B))