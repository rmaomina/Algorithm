
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [x, y] = input.map(Number)

if (y >= x) {
  console.log(y - x)
} else {
  console.log(y + x)
}