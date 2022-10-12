
// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const N = +input
result = ''

for (let i = 1; i <= N; i++) {
    result += i + '\n'    
}

console.log(result)