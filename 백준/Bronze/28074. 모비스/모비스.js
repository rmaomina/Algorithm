
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("")

const result = "MOBIS".split("").every(el => input.includes(el)) ? "YES" : "NO"
console.log(result);