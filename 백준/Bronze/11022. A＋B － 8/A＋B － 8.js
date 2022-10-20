// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const array = input.slice(1).map(el => el.split(' '))
let result = ''
array.map((el, idx) => {
  result += `Case #${idx + 1}: ${el[0]} + ${el[1]} = ${+el[0] + +el[1]}\n`
})
console.log(result)




