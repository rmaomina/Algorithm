
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, numbers] = input.split("\n");
let evenCount = 0;
let oddCount = 0;

let filtered = numbers.split(" ").map(el => {
  if (+el % 2 !== 0) {
    oddCount++;
  } else {
    evenCount++;
  }
});

if (evenCount > oddCount) {
  console.log("Happy");
} else {
  console.log("Sad");
}
