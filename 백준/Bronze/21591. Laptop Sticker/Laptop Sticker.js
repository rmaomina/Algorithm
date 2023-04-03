
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")
.map(Number)

const [w1, h1, w2, h2] = input

if (w1 - 1 > w2 && h1 - 1 > h2) console.log(1)
else console.log(0)