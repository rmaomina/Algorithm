
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [n, ...info] = input
let result = ""

for (let i = 0; i < +n; i++) {
  let [d, f, p] = info[i].split(' ').map(Number)
  result += "$"
  result += Number.parseFloat(d * f * p).toFixed(2)
  if (+n - 1 !== i) result += "\n"
}

console.log(result)

