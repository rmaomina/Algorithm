
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, ...array] = input.split("\n")
let result = [];

for (let elem of array) {
    const [beginning, incresing] = elem.split(" ").map(Number)
    const dead = parseInt(incresing / 7)
    const born = parseInt(incresing / 4)
    result.push(beginning + born - dead)
}

console.log(result.join("\n"))