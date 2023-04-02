
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

const nums = input.map(Number)

if ((nums[0] === 9 || nums[0] === 8) && 
    (nums[3] === 9 || nums[3] === 8) &&
    (nums[1] === nums[2])) {
  console.log("ignore")
} else {
  console.log("answer")
}