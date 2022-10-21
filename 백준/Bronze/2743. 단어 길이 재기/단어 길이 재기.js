const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

console.log(input.length)