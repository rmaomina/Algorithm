
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let sum = 0;
let sum3 = 0;

for (let i = 1; i <= +input; i++) {
    sum += i;
    sum3 += Math.pow(i, 3);
}

console.log(`${sum}\n${Math.pow(sum, 2)}\n${sum3}`);