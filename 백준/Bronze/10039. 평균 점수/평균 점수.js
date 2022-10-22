// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)

let result = input.reduce((a, c) => {
  if (c < 40) c = 40
  return a + c
}, 0)


console.log(result / input.length)