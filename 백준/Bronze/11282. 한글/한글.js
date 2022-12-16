
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const answer = String.fromCharCode(+input + 44031);
console.log(answer);
 


