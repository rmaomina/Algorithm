// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const num = input[0]
const carNumbers = input[1].split(' ')
let result = 0

carNumbers.forEach(el => {
  if (el === num) result += 1
})

console.log(result)
