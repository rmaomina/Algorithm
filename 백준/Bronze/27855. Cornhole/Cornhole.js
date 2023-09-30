
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n");

let [H1, B1] = input[0].split(" ").map(Number);
let [H2, B2] = input[1].split(" ").map(Number);

let scoreP1 = H1 * 3 + B1;
let scoreP2 = H2 * 3 + B2;

if (scoreP1 === scoreP2) {
    console.log("NO SCORE");
} else if (scoreP1 > scoreP2) {
    console.log(`1 ${scoreP1 - scoreP2}`);
} else if (scoreP1 < scoreP2) {
    console.log(`2 ${scoreP2 - scoreP1}`);
}
