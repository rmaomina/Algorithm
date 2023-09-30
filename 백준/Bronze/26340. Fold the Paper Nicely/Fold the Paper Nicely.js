
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, ...datasets] = input.split("\n");

let result = datasets.map(el => {
    let [a, b, count] = el.split(" ").map(Number);
    let ans = aux(Math.max(a, b), Math.min(a, b), count).join(" ")
    return `Data set: ${el}\n${ans}\n`;
}).join("\n");

function aux (max, min, repeat) {
    if (repeat === 0) return [max, min];
    let calcMax = parseInt(max / 2);

    return aux(Math.max(calcMax, min), Math.min(calcMax, min), repeat - 1);
}

console.log(result);