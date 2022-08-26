function solution(left, right) {
    let answer = 0;

    // 희찬님 풀이보고 다시 정리 
    // sqrt(i)를 제곱한 값이 i와 같다면 약수는 홀수개 << 수학적 접근 
    for (let i = left; i <= right; i++) {
      let sqrt = parseInt(Math.sqrt(i))

      if (sqrt*sqrt === i) { // 홀수
        answer -= i
      } else { // 짝수 
        answer += i
      }
    }

    return answer;
}

// console.log(solution(4, 7))
console.log(solution(13, 17)) // 13, 14, 15, 16, 17
// console.log(solution(1, 150))