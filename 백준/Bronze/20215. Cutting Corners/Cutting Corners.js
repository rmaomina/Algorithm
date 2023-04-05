
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [w, h] = input.map(Number)

const ractangle = (w + h)
const oblique = Math.sqrt(w ** 2 + h ** 2)

console.log(ractangle - oblique)
