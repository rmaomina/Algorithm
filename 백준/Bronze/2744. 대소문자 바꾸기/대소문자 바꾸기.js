// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('')

let answer = input.map(el => {
  if (el.charCodeAt(0) > 91) return el.toUpperCase()
  else return el.toLowerCase()
}).join('')

console.log(answer)