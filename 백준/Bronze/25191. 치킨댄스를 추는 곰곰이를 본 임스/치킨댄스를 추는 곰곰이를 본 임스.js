// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
let chicken = +input[0]
let [coke, beer] = input[1].split(' ').map(Number)

let eatable = Math.floor(coke / 2) + beer

console.log(Math.min(chicken, eatable))

