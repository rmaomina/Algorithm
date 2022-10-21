// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [N, array, v] = input
let count = 0
const number = array.split(' ').map(Number)

for (let i = 0; i < +N; i++) {

  if (number[i] === +v) count++
}
console.log(count)