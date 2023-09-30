
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [S, i] = input.split("\n");
const n = +i;

console.log(S[n - 1]);

