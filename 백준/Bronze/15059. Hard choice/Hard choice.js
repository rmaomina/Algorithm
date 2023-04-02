
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

const served = input[0].split(" ").map(Number)
const wanted = input[1].split(" ").map(Number)
let sadPassanger = 0

for (let i = 0; i< served.length; i++) {
  if (served[i] < wanted[i]) {
    sadPassanger += wanted[i] - served[i]
  }
}

console.log(sadPassanger)