// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const year = require('fs').readFileSync(path).toString().trim()

console.log(+year - 1946)