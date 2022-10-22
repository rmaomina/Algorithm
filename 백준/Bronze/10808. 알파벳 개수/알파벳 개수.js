// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('')

const result = new Array(27).fill(0)

input.forEach(el => {
  let idx = el.charCodeAt() - 96
  result[idx]++
})

console.log(result.slice(1).join(' '))
