
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("")

const bCount = input.filter(el => el === "B").length;
const cCount = input.filter(el => el === "C").length

console.log(parseInt(bCount / 2) + parseInt(cCount / 2));
