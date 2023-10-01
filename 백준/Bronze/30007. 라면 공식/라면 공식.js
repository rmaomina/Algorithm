
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [N, ...ramens] = input.split("\n");

const result = ramens.map(el => {
    let [A, B, X] = el.split(" ").map(Number);
    return A * (X - 1) + B;
}).join("\n");

console.log(result)