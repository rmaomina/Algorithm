
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")
.map(Number);

console.log(`  ___  ___  ___
  | |__| |__| |
  |           |
   \\_________/
    \\_______/
     |     |
     |     |
     |     |
     |     |
     |_____|
  __/       \\__
 /             \\
/_______________\\`);

