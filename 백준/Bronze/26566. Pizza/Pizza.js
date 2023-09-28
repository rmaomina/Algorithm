
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, ...pizzas] = input.split("\n");
let result = "";

for (let i = 0; i < +n; i++) {
    let [A1, P1] = pizzas[i * 2].split(" ").map(Number);
    let [R1, P2] = pizzas[i * 2 + 1].split(" ").map(Number);

    let slicePerDollar = A1 / P1;
    let wholePerDollar = Math.floor(R1**2*Math.PI) / P2;

    if (slicePerDollar >= wholePerDollar) {
        result += "Slice of pizza\n";
    } else {
        result += "Whole pizza\n";
    }
}

console.log(result);