
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, m] = input.split(" ").map(Number);
endOfMonth = 14 - n + m;

let calendar = Array.from({length: 14}, (v, i) => {
    v = i + m;
    if (v > endOfMonth) {
        v -= endOfMonth
    };
    return v;
})

console.log(calendar[calendar.length - 7]);