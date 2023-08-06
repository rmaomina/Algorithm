
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const num = +input
let count = 0;

for (let i = 0; i < num; i++) { // 1~7
    count += 1;
}

console.log(count + "\n" + 1)