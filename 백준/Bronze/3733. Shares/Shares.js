// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const array = input.map(el => el.split(' ').map(BigInt))
let result = ''
array.forEach(el => {
    result += el[1] / (el[0] + 1n)
    result += '\n'
})

console.log(result)