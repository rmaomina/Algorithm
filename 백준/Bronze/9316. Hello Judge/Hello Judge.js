// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
let answer = ''

for (let i = 1; i <= +input; i++) {
  answer += `Hello World, Judge ${i}!\n`
}


console.log(answer)