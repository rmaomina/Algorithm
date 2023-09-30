
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")
.map(Number);

console.log(input[0]*100 >= input[1] ? "Yes" : "No");

