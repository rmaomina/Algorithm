// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
let result = ''

for (let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      result += `:${input}:`
    } else {
      result += ':fan:'
    }
  }
  result += '\n'
}

console.log(result)
