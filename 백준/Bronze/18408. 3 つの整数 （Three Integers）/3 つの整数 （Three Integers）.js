
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

let one = 0
let two = 0

for (let n of input) {
  if (n === "1") one += 1
  else if (n === "2") two += 1
}

if (one > two) {
  console.log("1")
} else {
  console.log("2")
}