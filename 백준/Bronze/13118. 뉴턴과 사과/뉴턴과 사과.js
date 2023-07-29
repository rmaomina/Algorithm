
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const pxPosition = input[0].split(" ").map(Number);
const [axPos, ayPos, aRadius] = input[1].split(" ").map(Number);

console.log(pxPosition.indexOf(axPos) + 1)