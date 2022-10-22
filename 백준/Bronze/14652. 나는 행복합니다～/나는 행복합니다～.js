// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
const [N, M, K] = input

let count = 0
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (count === K) console.log(`${i} ${j}`)
    count += 1
  }
}