
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const target = input[0]
const [n, ...friends] = input.slice(1)
let result = 0

for (let friend of friends) {
  if (friend === target) result += 1
}

console.log(result)