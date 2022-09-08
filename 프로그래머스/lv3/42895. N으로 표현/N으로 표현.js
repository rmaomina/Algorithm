function solution(N, number) {
    // 재료 숫자와 목표 숫자가 같을 경우 1을 return 
  if (N === number) return 1

  // 숫자를 넣을 dp 공간 [set(0), set(0), ...]
  const dp = [...new Array(9)].map(() => new Set())
  // 반복문을 전부 돌았을 때 값이 없을 경우 -1
  let answer = -1
  let strNum = String(N) // 숫자를 합칠 수 있도록 string화

  dp[1].add(N) // dp 첫번째 set에 숫자를 담음. 

  // 숫자를 8개까지 사용할 수 있기 때문에 55, 555 ... 55555555 경우의 수만큼
  for (let i = 2; i <= 8; i++) { 
    // 1: 55, 2: 555
    strNum += N
    dp[i].add(Number(strNum))

    // j는 i 즉, 자릿수만큼 반복하는데, 
    for (let j = 1; j < i; j++) {
      // dp[i-j] 첫번째 배열의 수와 dp[j]를 하나씩 연산한다. 
      // 예를 들면 i가 3일 때, 555
      for (let num1 of dp[i - j]) {
        for (let num2 of dp[j]) {
          dp[i].add(num1 + num2)
          dp[i].add(num1 - num2)
          dp[i].add(num1 * num2)
          dp[i].add(num1 / num2)
        }
      }
    }

    if (dp[i].has(number)) {
      answer = i
      break
    }
  }

  return answer
}