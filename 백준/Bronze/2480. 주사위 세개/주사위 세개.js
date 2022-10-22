// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)

input.sort((a, b) => b - a);

const [A, B, C] = input;

if (A !== B && A !== C && B !== C) {
  console.log(A * 100);
} else if (A === B && B !== C) {
  console.log(1000 + A * 100);
} else if (B === C && C !== A) {
  console.log(1000 + C * 100);
} else if (C === A && A !== B) {
  console.log(1000 + C * 100);
} else {
  console.log(10000 + A * 1000);
}