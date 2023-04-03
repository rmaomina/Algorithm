
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [X, L, R] = input.map(Number)
let result = L;

for (let i = L; i <= R; i++) {
  if (Math.abs(result - X) > Math.abs(i - X)) {
    result = i
  }
}

console.log(result)

