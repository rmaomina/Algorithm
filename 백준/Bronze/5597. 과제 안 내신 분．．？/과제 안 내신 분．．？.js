// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)
input.sort((a, b) => a - b)
let result = ''

for (let i = 1; i <= 30; i++) {
  if (input.indexOf(i) === -1) result += `${i}\n`
}

console.log(result)