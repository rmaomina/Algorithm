
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [a, b, c, d] = input.split(" ").map(Number);
const r1 = a * b;
const r2 = c * d;

if (r1 === r2) {
    console.log("E");
} else if (r1 > r2) {
    console.log("M");
} else if (r1 < r2) {
    console.log("P");
}