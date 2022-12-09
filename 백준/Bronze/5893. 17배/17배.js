// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

let bin = "0b" + input;
const answer = (BigInt(bin) * 17n).toString(2);

console.log(answer);
