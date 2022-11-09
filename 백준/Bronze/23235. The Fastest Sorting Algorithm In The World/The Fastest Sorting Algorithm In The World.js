// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let array = input.slice(0, input.length - 1)
let answer = ''

for (let i = 1; i <= array.length; i++) {
  answer += `Case ${i}: Sorting... done!\n`
}
console.log(answer)

