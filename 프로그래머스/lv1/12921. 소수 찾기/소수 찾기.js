function solution(n) {
  let prime = 0

  for (let i = 2; i <= n; i++) { // 10이라고 하면 2부터 10까지 소수인지 확인해야 함. 
    if (isPrimeNum(i)) prime += 1
  }

  return prime;
}

function isPrimeNum(num) { // 2, 3 ... 10
  // 2의 배수는 소수가 아니다. (단 2를 제외하고) 6
  if (num !== 2 && num % 2 === 0) return false

  let sqrt = Math.floor(Math.sqrt(num))
  // 이미 계산한 값은 중복해서 하지 말자. 3일 떄, 3 (소수) / 11일 때, 3, 5, 7, 9, 11
  for (let n = 3; n <= sqrt; n += 2) { // 3부터 홀수만
    if (num % n === 0) {
      return false
    }
  }
  return true
}

console.log(solution(17)) // --> 2, 3, 5, 7, 11, 13, 17 (7)
console.log(solution(778)) // --> ... 137개라고 함.