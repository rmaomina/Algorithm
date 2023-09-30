
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [n, word] = input.split("\n");

const lastIndex = +n - 1;
if (word[lastIndex] === "G") {
    console.log(word.slice(0, lastIndex));
} else {
    console.log(word + "G");
}
