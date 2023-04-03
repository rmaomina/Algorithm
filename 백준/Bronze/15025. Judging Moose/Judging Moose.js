
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [left, right] = input.map(Number)

if (left === 0 && right === 0) console.log("Not a moose")
else if (left === right) console.log(`Even ${left * 2}`)
else {console.log(`Odd ${Math.max(left, right) * 2}`)}

