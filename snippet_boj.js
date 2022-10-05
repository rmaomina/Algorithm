const path = __dirname + "/input_boj.txt";
// const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

let [first, ...nodes] = input


console.log('')