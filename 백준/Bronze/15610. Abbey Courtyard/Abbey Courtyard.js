
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()


const sqared = Math.sqrt(Number(input)) * 4

console.log(sqared)