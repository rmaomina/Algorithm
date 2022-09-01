
function solution(arr1, arr2) {

  // 행렬의 곱
  // 앞 행렬이 m × n 크기이고 뒤 행렬이 n×r 크기인 경우 곱은 m×r 크기의 행렬이 된다.
  // 즉, 이해한대로 적어보면, arr1의 행의 갯수와(3), arr2의 열의 갯수를(2) 갖는다...............
  // arr1의 i번째 행과 arr2의 j번째 열의 원소들을 곱한 것들의 합이 answer[i][j] 값

  //      b  [1, 3]
  //   a     [4, 2]
  // [1, 4] a00*b00+a01*b10, a00*b01+a01*b11 (1+16, 3+8) 
  // [3, 2] a10*b00+a11*b10, a10*b01+a11*b11 (3+8, 9+4)
  // [4, 1] a20*b00+a21*b10, a20*b01+a21*b11 (4+4, 12+2)

  const table = []

  for (let r = 0; r < arr1.length; r++) {
    table[r] = new Array(arr2[0].length).fill(0)
  }

  console.table(table)

  for (let i = 0; i < table.length; i++) { // 행 반복
    for (let j = 0; j < table[i].length; j++) { // 열 반복
      let sum = 0
      for (let k = 0; k < arr1[i].length; k++) {
        // 1. [0][0]에 담길 값: a00*b00+a01*b10 
        // 2. [0][1]에 담길 값: a00*b01+a01*b11 
        // ... ...
        sum += arr1[i][k] * arr2[k][j]
      }
      table[i][j] = sum
    }
  }
  return table
}

// 테스트 케이스 
// [[15, 15], [15, 15], [15, 15]]
// console.table([[1, 4],[3, 2],[4, 1]])
// console.table([[1, 3],[4, 2]])
console.table(solution([[1, 4],[3, 2],[4, 1]],[[3, 3],[3, 3]])) 

// [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
console.table(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])) 

// [[17, 11], [11, 13], [8, 14]]
console.table(solution([[1, 4], [3, 2], [4, 1]],[[1, 3], [4, 2]])) 