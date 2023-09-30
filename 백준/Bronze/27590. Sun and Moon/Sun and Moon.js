
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n");

let [d1, y1] = input[0].split(" ").map(Number);
let [d2, y2] = input[1].split(" ").map(Number);

for (let i = 0; i <= 5000; i++) {
    const sunPos = (d1 + i) % y1; // 3 % 10 => 7
    const moonPos = (d2 + i) % y2; // 1 % 2 => 1
    
    if (sunPos === moonPos) {
        console.log(i);
        break;
    }
}
