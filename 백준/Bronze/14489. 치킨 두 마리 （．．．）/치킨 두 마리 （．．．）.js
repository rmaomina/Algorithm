// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [A, B] = input[0].split(' ').map(Number)
const chicken = +input[1]

const calc = (A + B) - (chicken * 2)
if (calc < 0) {
  console.log(A + B)
} else {
  console.log(calc)
}
