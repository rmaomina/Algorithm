let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.

  // 전혀 모르겠음. 감도 안잡힘. 
  // 일단 채워 봄... tiling(1)이면, // a, a가 되는 건지?? 

  // 2*n의 보드에 2*1타일을 놓는데, 모든 경우의 수를 찾는다. 
  // 다음과 같이 재귀적으로 정의할 수 있다.
  // 2*5는 2*4과 2*3에 타일을 놓는 경우의 수와 같다. 
  // 2*4는 2*3과 2*2에 타일을 놓는 경우의 수와 같다. 
  // 2*3은 2*2와 2*1에 타일을 놓는 경우의 수와 같다. 
  // 2*2는 2개, 2*1은 1개의 경우의 수를 가진다.
  
  // 1. 단순 재귀적으로 풀이: O(2^N) 
  // if (n <= 2) return n
  // return tiling(n - 1) + tiling(n - 2)

  // 2. dynamic with memoization: O(N)
  // 인덱스를 직관적으로 관리하기 위해 dummy를 만든다. 
  const memo = [0, 1, 2]
  // 재귀를 위한 보조 함수 auxiliary func을 선언한다. 
  const aux = (size) => {
    // 이미 해결한 문제는 풀지 않는다. 
    if (memo[size] !== undefined) return memo[size]
    memo[size] = aux(size - 1) + aux(size - 2)
    return memo[size]
  }
  return aux(n)

  // 3. dynamic with tabulation: O(N)
  // 이 방법은 일단 생소함. 이해가 필요.. 
  // let first = 1, second = 2
  // if (n <= 2) return n
  // for (let size = 3; size <= n; size++) {
  //   // 앞의 두 수를 더해 다음 수를 구할 수 있다. 
  //   const next = first + second
  //   // 다음 문제로 넘어가기 위해 필요한 2개의 데이터의 순서를 정리한다. 
  //   first = second
  //   second = next
  // }
  // return second

};

console.log(tiling(4)) // 5
console.log(tiling(5)) // 8
console.log(tiling(1)) // 1
console.log(tiling(10)) // 89