
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

function gcd(a, b) {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
}

const [p1, q1, p2, q2] = input.split(' ').map(Number);

// Find the gcd of p1, q1, p2, and q2
const gcd1 = gcd(p1, q1);
const gcd2 = gcd(p2, q2);
const gcd12 = gcd(gcd1, gcd2);

// Calculate the area of the triangle and check if it is an integer
const area = (p1 / gcd1 * p2 / gcd2) / (2 * q1 / gcd1 * q2 / gcd2);
const isInteger = Number.isInteger(area * gcd12 * gcd12);

console.log(isInteger ? 1 : 0);