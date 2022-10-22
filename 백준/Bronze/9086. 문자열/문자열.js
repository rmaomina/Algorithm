// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const array = input.slice(1)
let result = ''

array.forEach(el => {
  result += `${el[0]}${el[el.length-1]}\n`
})

console.log(result)
