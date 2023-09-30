
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let rows = [, "1", "2", "3", "4", "5", "6", "7", "8"];
let cols = [, "a", "b", "c", "d", "e", "f", "g", "h"];

let n = +input;
let r = Math.ceil(n / 8); 
let c = n % 8 === 0 ? 8 : n % 8; 

console.log(`${cols[c]}${rows[r]}`);

