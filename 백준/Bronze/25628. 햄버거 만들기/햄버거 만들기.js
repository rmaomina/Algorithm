
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ').map(Number)

let bread = Math.floor(input[0] / 2)

console.log(Math.min(bread, input[1]))