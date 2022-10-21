// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const N = +input

let result = ''

for (let i = 1; i <= N; i++) {
  result += ' '.repeat(N - i)
  result += '*'.repeat(i)
  result += '\n'
}

console.log(result)