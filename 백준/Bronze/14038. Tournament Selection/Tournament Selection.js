
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

let wCount = 0

for (let game of input) {
  if (game === "W") {
    wCount += 1
  }
}

if (wCount >= 5) {
  console.log("1")
} else if (wCount >= 3) {
  console.log("2")
} else if (wCount >= 1) {
  console.log("3")
} else {
  console.log("-1")
}