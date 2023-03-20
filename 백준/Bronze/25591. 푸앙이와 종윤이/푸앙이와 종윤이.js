// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")


const a = 100 - +input[0];
const b = 100 - +input[1];;
const c = 100 - (a + b);
const d = a * b;
const q = Math.floor(d / 100);
const r = d % 100;

console.log(a, b, c, d, q, r)
console.log(`${c + q} ${r}`)