// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const M = input[0].split(' ').map(Number)
const N = input[1].split(' ').map(Number)

let MT = M.reduce((a, c) => a + c)
let NT = N.reduce((a, c) => a + c)

if (MT >= NT) console.log(MT)
else console.log(NT)
