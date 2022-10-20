// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const result = input.map(el => el.split(' ').reduce((a, c) => +a + +c)).join('\n')

console.log(result)




