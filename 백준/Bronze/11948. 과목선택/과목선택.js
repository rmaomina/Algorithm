// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')
.map(Number)

let sub4 = input.slice(0, 4)
let sub2 = input.slice(4, 6)
let minScore = Math.min(...sub4) + Math.min(...sub2)

console.log(input.reduce((a, c) => a + c) - minScore)