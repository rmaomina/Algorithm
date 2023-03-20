// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [p, q] = input.split("\n").map(Number);
  let color;

  if (q > 30) {
    color = "Red";
  } else if (p <= 50 && q <= 10) {
    color = "White";
  } else {
    color = "Yellow";
  }

  console.log(color);