const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [n, k] = input.map(Number)

const std = 60 + k

const nextPetrol = n > std ? std * 1500 : n * 1500
const extraPetrol = n > std ? (n - std) * 3000 : 0
console.log(nextPetrol + extraPetrol)