
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n');

const result = input.map((el, idx) => {
    if (el === '0') return "";

    let [n, ...dataset] = el.split(" ").map(Number);
    if (n % 2 === 0) {
        return `Case ${idx + 1}: ${((dataset[(n / 2) - 1] + dataset[n / 2]) / 2).toFixed(1)}`;
    } else {
        return `Case ${idx + 1}: ${dataset[(n - 1) / 2].toFixed(1)}`;
    }
}).slice(0, -1).join("\n");

console.log(result);