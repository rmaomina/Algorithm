// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('')

let answer = []

answer.push(input.shift())

while (true) {
  if (input[0] !== '0') break
  answer[0] += input.shift()
}

answer.push(input.join(''))
console.log(answer.reduce((a, c) => +a + +c))