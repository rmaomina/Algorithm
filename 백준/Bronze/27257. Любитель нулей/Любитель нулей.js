
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let str = input;
let last = str[str.length - 1]; // "0"

while (last === '0') {
    str = str.slice(0, -1);
    last = str[str.length - 1];
}

console.log(str.split("").filter(el => el === "0").length);