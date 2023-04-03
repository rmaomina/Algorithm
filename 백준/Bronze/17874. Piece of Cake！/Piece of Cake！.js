// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [N, H, V] = input.map(Number)

let p1 = (H * V) * 4;
let p2 = (N - H) * (N - V) * 4;
let p3 = H * (N - V) * 4;
let p4 = V * (N - H) * 4;

console.log(Math.max(p1, p2, p3, p4))