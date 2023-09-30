
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("")

let sum = input.map(el => el.charCodeAt()).reduce((a, c) => a + c, 0)

console.log(String.fromCharCode(2015 - sum));