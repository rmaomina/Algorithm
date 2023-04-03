
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()


let colonCount = 0
let underCount = 0

for (let str of input) {
  if (str === ":") colonCount++
  else if (str === "_") underCount++
}

console.log(input.length + colonCount + underCount * 5)