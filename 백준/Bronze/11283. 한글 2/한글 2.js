// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

let letter = input.charCodeAt() - 44031

console.log(letter);
