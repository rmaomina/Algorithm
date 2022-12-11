// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)

if (input.every(el => el === 0 || el === 1)) {
  console.log('S')
} else {
  console.log('F')
}