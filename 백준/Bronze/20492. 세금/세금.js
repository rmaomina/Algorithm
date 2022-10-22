// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const total = +input

// 22% 세금으로 내는 경우 vs 80% 제외하고 20%에 대해 22% 세금을 내는 경우 
console.log(`${total - total * 0.22} ${(total - (total * 0.2) * 0.22)}`)