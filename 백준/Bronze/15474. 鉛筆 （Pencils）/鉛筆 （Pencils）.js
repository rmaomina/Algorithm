
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [target, a, b, c, d] = input.map(Number)

console.log(Math.min(Math.ceil(target/a) * b, Math.ceil(target/c) * d))