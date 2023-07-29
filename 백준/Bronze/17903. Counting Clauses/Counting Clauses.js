
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

console.log(Number(input[0]) >= 8 ? 'satisfactory' : 'unsatisfactory')