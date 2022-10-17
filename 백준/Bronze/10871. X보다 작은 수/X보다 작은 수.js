// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [N, X] = input[0].split(' ').map(Number)
const array = input[1].split(' ').map(Number)
// console.log(array)
console.log(array.filter(el => el < X).join(' '))
