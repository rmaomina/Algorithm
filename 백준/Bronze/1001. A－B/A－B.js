const path = __dirname + "/input_boj.txt";
// const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ')

console.log(+input[0] - +input[1])