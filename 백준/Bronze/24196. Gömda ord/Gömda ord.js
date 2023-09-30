
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let index = 0;
let result = "";
let decryted = input;

while (true) {
    if (index >= decryted.length - 1) {
        result += decryted[index];
        break;
    }

    result += decryted[index]; // "A"BKBFA
    index += decryted[index].charCodeAt() - 'A'.charCodeAt() + 1; // "A"
}

console.log(result);
