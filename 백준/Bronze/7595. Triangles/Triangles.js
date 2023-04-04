
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

let result = ""

for (let n of input) {
  if (n === "0") break

  for (let i = 1; i <= +n; i++) {
    result += "*".repeat(i) + "\n"
  }
}

console.log(result)