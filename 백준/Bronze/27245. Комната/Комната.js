
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [w, l, h] = input.split("\n").map(Number);
let minSide = Math.min(w, l);
let maxSide = Math.max(w, l);

if (minSide >= h * 2 && maxSide <= minSide * 2) {
    console.log("good");
} else {
    console.log("bad")
}