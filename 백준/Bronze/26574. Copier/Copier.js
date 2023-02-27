
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [k, ...copier] = input

let result = ""

for (let i = 0; i < k; i++) {
  result += `${copier[i]} ${copier[i]}\n`
}

console.log(result.trim())