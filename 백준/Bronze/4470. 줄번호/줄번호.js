// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [num, ...array] = input

const result = array.map((el, idx) => {
  return `${idx + 1}. ${el}`
})
console.log(result.join('\n'));
