// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
let answer = ''

for (let i = 0; i < input.length - 1; i++) {
  let [a, b] = input[i].split(' ').map(Number)
  if (a > b) answer += 'Yes'
  else answer += 'No'
  answer += '\n'
}

console.log(answer)