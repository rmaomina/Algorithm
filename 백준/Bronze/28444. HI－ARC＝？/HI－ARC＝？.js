
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [H,I,A,R,C] = input.split(" ").map(Number);

let first = H * I;
let second = A * R * C;

console.log(first - second);