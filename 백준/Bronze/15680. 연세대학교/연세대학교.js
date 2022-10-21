// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

console.log(input === '0' ? 'YONSEI' : 'Leading the Way to the Future')
