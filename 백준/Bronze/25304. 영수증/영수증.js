// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

const [X, N, ...array] = input
let sum = 0

for (let i = 0; i < +N; i++) {
  let [price, each] = array[i].split(' ').map(Number)
  sum += price * each
}

console.log(sum === +X ? 'Yes' : 'No')