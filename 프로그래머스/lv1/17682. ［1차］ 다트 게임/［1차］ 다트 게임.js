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