// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const array = input.slice(0, input.length - 1)
console.log(array.map(el => el.split(' ').reduce((a, c) => +a + +c)).join('\n'))

