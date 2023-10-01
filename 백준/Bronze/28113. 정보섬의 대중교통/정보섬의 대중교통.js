
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [N, A, B] = input.split(" ").map(Number);

if (N <= B && A > B) {
    console.log("Subway");
} else if (N <= B && A === B) {
    console.log("Anything");
} else {
    console.log("Bus");
}
