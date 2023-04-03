
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const n = +input[0]
const units = input[1].split(" ").map(Number)

let result = 0;

for (let likes of units) {
  if (n < likes) result += n
  else result += likes
}

console.log(result)