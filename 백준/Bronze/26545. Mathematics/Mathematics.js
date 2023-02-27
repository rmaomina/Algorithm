
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [k, ...nums] = input.map(Number)

const sum = nums.reduce((a, c) => a + c)
console.log(sum)



