const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

const n = parseInt(input);
let unitsDigit = 1;

// Calculate the units digit of n! by calculating the units digits of the factors
for (let i = 1; i <= n; i++) {
  unitsDigit = (unitsDigit * i) % 10;
}

console.log(unitsDigit);

