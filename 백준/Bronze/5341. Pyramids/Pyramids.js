
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const line = input.map(Number)

let aux = function(num) {
  if (num === 0) return 0
  else return num + aux(num - 1) // 4 3 2 1 0
}

let result = []

for (let i = 0; i < line.length - 1; i++) {
  result[i] = aux(line[i])
}

console.log(result.join('\n'))

