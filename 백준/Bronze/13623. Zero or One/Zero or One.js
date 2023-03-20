// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [a, b, c] = input;
if (a === b && b === c) {
  console.log('*');
} else if (a !== b && b === c) {
  console.log('A');
} else if (b !== a && a === c) {
  console.log('B');
} else if (c !== a && a === b) {
  console.log('C');
} else {
  console.log('*');
}
