// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split(' ')
const [UR, TR, UO, TO] = input.map(Number)
console.log(UR * 56 + TR * 24 + UO * 14 + TO * 6)