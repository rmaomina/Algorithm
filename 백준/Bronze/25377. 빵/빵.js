
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const bakeries = input.slice(1)
let term = Infinity;

for (let bakery of bakeries) {
  const [A, B] = bakery.split(" ").map(Number)
  if (A <= B) {
    term = Math.min(term, B);
  }
}

console.log(term)