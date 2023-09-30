
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const pairs = {};

input.map(el => {
    if (pairs[el] === undefined) pairs[el] = 0;
    pairs[el]++;
})

console.log(Object.keys(pairs).filter(el => pairs[el] % 2 !== 0).join(""));


