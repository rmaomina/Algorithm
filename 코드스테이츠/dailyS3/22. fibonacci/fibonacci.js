function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.

  // 아래 예시는 우리가 배웠던 피보나치 재귀함수
  // Naive Solution: O(2^N)
  // 무려 495초.. 8분 정도 걸림 ^^

  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
  
}

// [Done] exited with code=0 in 495.449 seconds

console.log(fibonacci(0)) // 0
console.log(fibonacci(11)) // 1
console.log(fibonacci(26)) // 1
console.log(fibonacci(37)) // 2
console.log(fibonacci(42)) // 3
console.log(fibonacci(52)) // 5
console.log(fibonacci(10)) // 8
