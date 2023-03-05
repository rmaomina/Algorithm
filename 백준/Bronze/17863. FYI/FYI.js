// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

if (input.slice(0, 3) === "555") {
  console.log("YES")
} else {
  console.log("NO")
}