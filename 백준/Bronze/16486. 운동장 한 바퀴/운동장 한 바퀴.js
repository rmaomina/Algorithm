// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')
.map(Number)

const d1 = input[0]
const d2 = input[1]

console.log(d1 * 2 + d2 * 2 * 3.141592)