// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)
let base = 9 * 1 + 7 * 3 + 8 * 1 + 0 * 3 + 9 * 1 + 2 * 3 + 1 * 1 + 4 * 3 + 1 * 1 + 8 * 3

input.forEach((el, idx) => {
  if (idx % 2 === 0) base += (el * 1)
  else base += (el * 3)
})

console.log(`The 1-3-sum is ${base}`)
