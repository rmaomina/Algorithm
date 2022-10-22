// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const [N, ...array] = require('fs').readFileSync(path).toString().trim().split('\n')
let result = ''

array.forEach(el => {
    if (el.length >= 6 && el.length <= 9) result += 'yes'
    else result += 'no'
    result += '\n'
})

console.log(result)