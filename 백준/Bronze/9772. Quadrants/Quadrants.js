
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n");

const result = input.map(el => {
    const [x, y] = el.split(" ").map(Number);
    if (x === 0 || y === 0) {
        return "AXIS";
    } else if (x > 0 && y > 0) {
        return "Q1";
    } else if (x > 0 && y < 0) {
        return "Q4";
    } else if (x < 0 && y > 0) {
        return "Q2";
    } else if (x < 0 && y < 0) {
        return "Q3";
    }
}).join("\n");

console.log(result);
