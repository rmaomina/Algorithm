// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'


const input = require('fs').readFileSync(path).toString().trim().split(' ').map(Number)
let result = input.reduce((a, c) => {
    return a + c * 5
}, 0)
console.log(result)