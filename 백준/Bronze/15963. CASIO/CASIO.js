// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const N = input[0]
const M = input[1]

if (N === M) console.log('1')
else console.log('0')
