
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [L, T] = input.split("\n").map(Number)

console.log(T*2-L)