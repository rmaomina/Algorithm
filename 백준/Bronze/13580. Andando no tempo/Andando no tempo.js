const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [a, b, c] = input.map(Number)
let possible = false

const permutations = [
  [a + b, c],
  [a + c, b],
  [b + c, a],
  [a, b],
  [a, c],
  [b, c]
]

for (let permutation of permutations) {
  let current = Math.abs(permutation[0] - permutation[1])
  if (current === 0) {
    possible = true
    break
  }
}

console.log(possible ? "S" : "N")