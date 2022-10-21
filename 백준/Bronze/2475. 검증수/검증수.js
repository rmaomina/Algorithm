// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
let number = input.split(' ').map(Number)

let result = number.reduce((a, c) => {
  let p = c ** 2
  return a + p
}, 0)

console.log(result % 10)
