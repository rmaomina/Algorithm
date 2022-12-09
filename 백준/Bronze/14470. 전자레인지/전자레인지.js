// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
let [from, to, C, D, E] = input.map(Number)

let time = 0

if (from < 0) {
  time += D
} 

while (from !== to) {
  if (from < 0) {
    time += C
  } else if (from >= 0) {
    time += E
  }
  from += 1
}

console.log(time)