// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const appleScore = input.slice(0, 3).map(Number);
const bananaScore = input.slice(3).map(Number);

let aSum = 0;
let bSum = 0;

for (let i = 0; i < 3; i++) {
  aSum += appleScore[i] * (3 - i);
  bSum += bananaScore[i] * (3 - i);
}

if (aSum > bSum) {
  console.log("A")
} else if (aSum < bSum) {
  console.log("B")
} else {
  console.log("T")
}
