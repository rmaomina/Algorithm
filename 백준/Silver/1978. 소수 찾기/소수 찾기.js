
const path = __dirname + '/input_boj.txt'
// const path = '/dev/stdin'

// 에라토스테네스의 체를 사용해 보려고 했지만, 
// 연속된 N까지의 숫자의 범위가 아니라 배열에 주어진 N개 중에 소수인지 구분하는 것이기 떄문에 
// 에라토스테네스체 방식으로 구현하는 방식이 아닌 것 같다. 

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const arr = input[1].split(' ').map(Number);

const isPrime = (n) => {
    if (n === 1) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
}

console.log(arr.filter(v => isPrime(v)).length);