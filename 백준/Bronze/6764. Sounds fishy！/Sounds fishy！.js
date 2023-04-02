
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

const depths = input.map(Number)
let result = 0

for (let i = 0; i < depths.length; i++) {
  if (depths[i] < depths[i+1]) {
    result += 1
  } else if (depths[i] > depths[i+1]) {
    result -= 1
  }
}

const len = new Set(depths)

if (len.size === 1) {
  console.log("Fish At Constant Depth")
} else if (result === 3) {
  console.log("Fish Rising")
} else if (result === -3) {
  console.log("Fish Diving")
} else {
  console.log("No Fish")
}