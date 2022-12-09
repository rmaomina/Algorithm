// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [sum, diff] = input.map(Number)

if (sum - diff < 0 || (sum - diff) % 2 !== 0) {
  console.log(-1)
} else {
  const result = [(sum - diff) / 2, (sum + diff) / 2]
  console.log(...result.sort((a, b) => b - a))
}
