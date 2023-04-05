const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [A, B] = input.map(Number)

console.log(`\
${Math.max(A + B, A - B)}
${Math.min(A + B, A - B)}`)