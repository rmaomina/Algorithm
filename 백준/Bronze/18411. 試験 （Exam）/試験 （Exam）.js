
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

let score = input.map(Number).sort((a, b) => b - a)
console.log(score[0] + score[1])
