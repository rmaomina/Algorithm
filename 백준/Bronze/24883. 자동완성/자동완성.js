
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

if (input === 'N' || input === 'n') {
  console.log("Naver D2")
} else {
  console.log("Naver Whale")
}
