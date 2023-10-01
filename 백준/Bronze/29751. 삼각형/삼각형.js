
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [W, H] = input.split(" ").map(Number);

console.log((W * H / 2).toFixed(1));