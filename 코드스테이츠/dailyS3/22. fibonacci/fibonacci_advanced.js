function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  // Advanced

  // dynamic with meoization: O(N)
  // 이미 해결한 문제의 정답을 따로 기록해두고,
  // 다시 해결하지 않는 기법

  // fibo(10)
  // = fibo(9) + fibo(8)
  // = fibo(8) + fibo(7) + fibo(7) + fibo(6) + ...
  // 여기까지만 보아도 동일한 문제가 중복으로 계산되는 것을 알 수 있다.

  const memo = [0, 1]
  const fibo = (n) => {
    if (memo[n] === undefined) memo[n] = fibo(n - 1) + fibo(n - 2);
    
    return memo[n]
  }
  return fibo(n)
}

// [Done] exited with code=0 in 0.266 seconds

console.log(fibonacci(0)) // 0
console.log(fibonacci(11)) // 1
console.log(fibonacci(26)) // 1
console.log(fibonacci(37)) // 2
console.log(fibonacci(42)) // 3
console.log(fibonacci(52)) // 5
console.log(fibonacci(10)) // 8
