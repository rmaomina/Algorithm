// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
let result = ''

for (let i = +input; i > 0 ; i--) {
  result += `${i}\n`
}

console.log(result)