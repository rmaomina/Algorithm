// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [size, ...array] = input
const [N, M] = size.split(' ').map(Number)
const arr1 = array.slice(0, N).map(el => el.split(' ').map(Number))
const arr2 = array.slice(N).map(el => el.split(' ').map(Number))

let result = arr1.map((el, r) => {
  return el.map((v, c) => v + arr2[r][c]).join(' ')
}).join('\n')

console.log(result)
