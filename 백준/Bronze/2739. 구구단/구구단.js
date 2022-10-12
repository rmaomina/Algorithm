// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const number = Number(input)

for (let i = 1; i <= 9; i++) {
  console.log(`${number} * ${i} = ${number * i}`)
}
