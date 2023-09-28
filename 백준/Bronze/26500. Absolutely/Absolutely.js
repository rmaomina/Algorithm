
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')
.slice(1)

const result = input.map(el => {
    let [a, b] = el.split(" ").map(Number);
    return parseFloat(Math.max(a, b) - Math.min(a, b)).toFixed(1);
});

console.log(result.join("\n"))