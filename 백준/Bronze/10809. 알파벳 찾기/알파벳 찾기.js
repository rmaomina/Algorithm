// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

let result = ''

for (let i = 1; i <= 26; i++) {
  let str = String.fromCharCode(96 + i)
  let index = input.indexOf(str)
  result += `${index}\n`
}

console.log(result)
  




