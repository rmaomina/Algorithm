// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const array = input.slice(1).map(el => el.split(' ').map(Number))

let result = array.map(el => el.reduce((a, c) => a + c)).join('\n')

console.log(result)