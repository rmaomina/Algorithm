// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [num, ...array] = input

console.log(array.map(el => el.split(' ').reduce((a, c) => +a + +c)).join('\n'))