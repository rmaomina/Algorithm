
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let result = "";

for (let i = 1; i <= +input; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
        result += "Wiwat!";
    } else if (i % 11 === 0) {
        result += "Super!";
    } else if (i % 7 === 0) {
        result += "Hurra!";
    } else {
        result += i;
    }
    result += "\n";
}

console.log(result);