
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [x, y] = input.split(" ");
console.log(Math.ceil((x * y) / 4840 / 5));