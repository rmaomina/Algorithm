
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [n, ...scores] = input.split("\n");

let dScore = 0;
let pScore = 0;

for (let score of scores) {
    if (score === "D") {
        dScore++;
    } else if (score === "P") {
        pScore++;
    }
    if (Math.abs(dScore - pScore) > 1) break;
}
console.log(`${dScore}:${pScore}`)