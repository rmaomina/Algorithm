
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [x, t] = input.split(" ").map(Number);

for (let i = t; i > 0; i--) {
    if (x % 2 === 0) {
        x = (x / 2) ^ 6
    } else {
        x = (2 * x) ^ 6
    }
}

console.log(x)