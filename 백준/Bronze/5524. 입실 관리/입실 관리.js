// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

const [N, ...names] = input

const result = names.map(el => el.toLowerCase())
console.log(result.join('\n'))