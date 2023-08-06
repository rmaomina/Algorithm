
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [day, week] = input.split("\n").map(Number);
const dayCount = day + (week * 7);

if (dayCount <= 30) {
    console.log(1)
} else {
    console.log(0)
}
