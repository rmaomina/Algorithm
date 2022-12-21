
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [info, ...array] = input
let [T, D, M] = info.split(' ').map(Number)

let arr = [0, ...array.map(Number), D]

let result = 'N'

arr.reduce((a, c) => {
  if (c - a >= T) {
    result = 'Y'
  }
  return c
})

console.log(result)