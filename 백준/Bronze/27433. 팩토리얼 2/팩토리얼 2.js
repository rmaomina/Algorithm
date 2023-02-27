
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

console.log(factorial(Number(input)))



