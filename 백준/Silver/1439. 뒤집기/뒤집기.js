const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let count = 0
for (let i = 0; i < input.length; i++) {
  if (input[i] !== input[i + 1]) count++
}

console.log(Math.floor(count / 2))