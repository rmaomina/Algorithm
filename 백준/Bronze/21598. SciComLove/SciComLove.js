// SciComLove
// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

console.log(`${'SciComLove'}\n`.repeat(+input))