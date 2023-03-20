// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")


let result = []

for (let i = 0; i < input.length; i++) {
  let sum = 0;
  for (let j = 0; j < input.length; j++) {
    if (i !== j) {
      sum += Math.abs(j - i) * 2 * +input[j]; // 40 + 120, 20 + 60, 40 + 40
    }
  }
  result.push(sum)
}

console.log(Math.min(...result))


