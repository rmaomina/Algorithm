// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [A, B, C] = input.map(Number)

if (A === B && A === C && A === 60) console.log('Equilateral')
else if (A + B + C === 180) {
  if (A === B || A === C || B === C) console.log('Isosceles')
  else if (A !== B && A !== C && B !== C) console.log('Scalene')
} else {
  console.log('Error')
}