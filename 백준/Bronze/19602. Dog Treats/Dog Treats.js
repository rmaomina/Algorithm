
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

const [S, M, L] = input.map(Number)
const calc = 1 * S + 2 * M + 3 * L

if (calc >= 10) {
  console.log("happy")
} else {
  console.log("sad")
}