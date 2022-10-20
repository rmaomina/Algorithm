// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let array = input.slice(1).map(el => el.split(' ').map(Number))

let result = ''

for (let i = 0; i < array.length; i++) {
  let sum = array[i][0] + array[i][1]
  result += `Case #${i + 1}: ${sum}\n`
}

console.log(result)


