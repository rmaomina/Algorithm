
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [n, k, a, b] = input.split(" ");


console.log(`${((k - 1) * b) + ((n - 1) * b)} ${(n - 1) * a}`);
