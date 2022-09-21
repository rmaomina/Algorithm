// for test
const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

function fiboDP(n) {  // 5
  let num = 0
  const memo = [0, 1, 1]

  for (let i = 2; i < n; i++) { // 3, 4, 5
    memo.push(memo[i - 1] + memo[i - 2])
    num ++
  }
  return num 
}

console.log(fibo(input) + ' ' + fiboDP(input))