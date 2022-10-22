// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const [large, small] = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)

const cupcakeLarge = large * 8
const cupcakeSmall = small * 3

console.log((cupcakeLarge + cupcakeSmall) - 28)