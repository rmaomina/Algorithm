// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const nums = input.map(Number)

console.log(nums[0] + nums[2] === nums[4] ? "YES" : "NO")