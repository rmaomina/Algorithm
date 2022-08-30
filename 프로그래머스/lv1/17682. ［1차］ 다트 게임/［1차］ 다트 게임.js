function solution(dartResult) {
  
  // "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
  // 예) 1S 2D* 3T

  // 문자열 슬라이스로 쪼개기 
  const board = dartResult.match(/[0-9]{1,2}[SDT]{1}[*|#]?/g) // 2D*
  const result = []
  
  console.log(board)

  // 기회 횟수만큼 반복하면서 점수 데이터 정리
  for (let i = 0; i < board.length; i++) {
    let score = board[i].split(/[SDT]{1}/g)[0]
    let option = board[i].split(/[SDT]{1}/g)[1]
    let bonus = 1 // 'T'인 경우 default

    if (/[D]/.test(board[i])) {
      bonus = 2
    } else if (/[T]/.test(board[i])) {
      bonus = 3
    }

    result.push(score ** bonus)
    console.log(result)

    if (option === '*') { // [2, 4, 6] + *가 나온 경우 
      for (let j = result.length - 1; j > result.length - 3; j--) {
        if (j < 0) continue
        result[j] *= 2
      }
    } else if (option === '#') {
      result[result.length - 1] *= -1
    }
  }
  
  return result.reduce((acc, cur) => acc + cur);

}

console.log(solution('1S2D*3T')) // 37 (11 * 2 + 22 * 2 + 33)
console.log(solution('1D2S#10S')) // 9 (12 + 21 * (-1) + 101)
console.log(solution('1D2S0T')) // 3 (12 + 21 + 03)
console.log(solution('1T2D3D#')) // -4 (1**3 + 2**2 + (3**2)-1)
console.log(solution('1D2S3T*')) // 59 (1**2*2 + 2**1*2 + (3**3)*2)

// console.log(solution('10D10S10T#')) // (100 + 20 + 2000) = 2120
// console.log(solution('10S1S0S*')) // (10 + 1*2 + 0*2) = 12
// console.log(solution('0S1S0S*')) // (0 + 2 + 0) = 2