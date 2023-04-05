
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [a, x, b, y, t] = input.map(Number)

let totalMinA = (t - 30) * 21
let totalMinB = (t - 45) * 21

if (totalMinA < 0) totalMinA = 0
if (totalMinB < 0) totalMinB = 0

console.log(a + totalMinA * x, b + totalMinB * y)

