
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [row, col] = input.map(Number)
let result = ""

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    result += "*"
  }
  result += "\n"
}

console.log(result)