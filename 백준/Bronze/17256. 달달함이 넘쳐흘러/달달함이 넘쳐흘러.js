// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [cakeA, cakeC] = input.map(el => el.split(' ').map(Number))

const cakeB = [cakeC[0] - cakeA[2], cakeC[1] / cakeA[1], cakeC[2] - cakeA[0]]
console.log(cakeB.join(' '))