
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let result = 0;
const [m, n] = input.split("\n").map(Number);

if (m === 1 || n === 1) {
    result = (m + n) - 1;
} else {
    result = (m + n) * 2 - 4
}
console.log(result);
