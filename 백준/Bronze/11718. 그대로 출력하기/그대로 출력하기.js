// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

for (let i = 0; i < input.length; i++) {
  console.log(input[i].trim())
}




