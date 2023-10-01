
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [n, word] = input.split("\n");
const aeiou = ["a", "e", "i", "o", "u"];
let count = 0;

for (let i = 0; i < n; i++) {
    if (aeiou.includes(word[i])) {
        count++;
    }
}

console.log(count);