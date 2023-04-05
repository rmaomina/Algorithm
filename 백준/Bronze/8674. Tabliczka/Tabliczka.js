
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [a, b] = input.map(Number)

const rowCut = (a % 2) * b
const colCut = (b % 2) * a

console.log(Math.min(rowCut, colCut))