// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
let minComp = (+input + 1) * 2
let maxComp = (+input + 1) * 3

console.log(`${minComp} ${maxComp}`)