
// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const [A, B] = input.split(' ').map(Number)

let result = '=='

if (A > B) result = '>'
else if (B > A) result = '<'

console.log(result)