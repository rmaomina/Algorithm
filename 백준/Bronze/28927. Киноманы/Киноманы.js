
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [maxReport, melReport] = input.split("\n");

function getTotalTimeCalc(c, s, m) {
  return c * 3 + s * 20 + m * 2 * 60;
}

let maxTotal = getTotalTimeCalc(...maxReport.split(" ").map(Number));
let melTotal = getTotalTimeCalc(...melReport.split(" ").map(Number));

if (maxTotal > melTotal) {
  console.log("Max");
} else if (melTotal > maxTotal) {
  console.log("Mel");
} else {
  console.log("Draw");
}