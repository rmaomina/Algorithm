function solution(n) {
  // 소수찾기 에라토스테네스의 체로 소수 찾기 
  // 나눠서 떨어지는 수를 제외하는 방법 외에도 
  // 범위의 배열을 true/false로 지정해놓고 
  // 2부터, 그 배수의 요소를 false로 만든다. 
  // 나머지를 반환. filter & length 

  // 0, 1은 false로 채워준다. 
  let arr = new Array(n + 1).fill(true).fill(false, 0, 2)

  // sqrt를 쓰지 않고 제곱근 아래까지 구할 수 있다.
  for (let i = 2; i * i <= n; i++ ) {
    // arr[i]가 true이면 아직 검사 안하거나 소수이거나. 
    if (arr[i]) { // 만약 검사하려는 수가 이미 false라면 검사할 필요 x.
      // 초기값은 i의 제곱으로 시작, 증감값은 i를 더해서 결국 i의 배수로 증가하도록.
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false // 위 조건을 충족하면 소수가 아니다. 
      }
    }
  }
  return arr.filter((v) => v).length
}

console.log(solution(17)) // --> 2, 3, 5, 7, 11, 13, 17 (7)
console.log(solution(778)) // --> ... 137개라고 함.