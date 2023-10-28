
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let num = +input;
let numStr = input.split("");

if (!numStr.includes("7") && num % 7 !== 0) {
  console.log(0);
} else if (!numStr.includes("7") && num % 7 === 0) {
  console.log(1);
} else if (numStr.includes("7") && num % 7 !== 0) {
  console.log(2);
} else if (numStr.includes("7") && num % 7 === 0) {
  console.log(3);
}