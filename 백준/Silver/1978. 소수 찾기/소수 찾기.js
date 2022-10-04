
// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

const isPrime = (n) => {
    if (n === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
}

const arr = input[1].split(' ').map(Number);

console.log(arr.filter(v => isPrime(v)).length);