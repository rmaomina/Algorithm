
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

if (input[0] === input[1]){
  console.log(1)
} else {
  console.log(0)
}