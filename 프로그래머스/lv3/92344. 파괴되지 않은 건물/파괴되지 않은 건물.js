// 첫번째 시도 (효율성 실패)
// function solution(board, skill) {
  
//   for (let info of skill) {
//       let [type, r1, c1, r2, c2, damage] = info
      
//       for (let i = r1; i <= r2; i++) {
//           for (let j = c1; j <= c2; j++) {
//               if (type === 1) { // 공격
//                   board[i][j] -= damage
//               } else if (type === 2) { // 회복
//                   board[i][j] += damage
//               }
//           }
//       }
//   }
  
//   return board.map(el => {
//     return el.filter((val, i) => el[i] > 0).length
//   }).reduce((a,c) => a + c)
// }

// 두번째 시도(누적합)
function solution(board, skill) {
  let answer = 0
  // 순차적인 값을 넣은 1차원 배열 만들기 Array.from(new Array(Number(N)), (x, i) => (i + 1))
  // 0으로 채운 2차원 배열 만들기 Array.from(new Array(board.length), () => new Array(board.length))
  let calcBoard = Array.from(Array(board.length + 1), () => new Array(board[0].length + 1).fill(0))

  // 누적합 기록하기 
  for (let info of skill) {
    let [type, r1, c1, r2, c2, damage] = info
    if (type === 1) damage *= -1

    calcBoard[r1][c1] += damage
    calcBoard[r1][c2 + 1] -= damage
    calcBoard[r2 + 1][c1] -= damage
    calcBoard[r2 + 1][c2 + 1] += damage
  }

  // 누적행 구하기
  for (let row = 0; row < calcBoard.length - 1; row++) {
    for (let col = 0; col < calcBoard[row].length - 1; col++) {
      calcBoard[row][col + 1] += calcBoard[row][col]
    }
  }

  // 누적열 구하기
  for (let col = 0; col < calcBoard[0].length - 1; col++) {
    for (let row = 0; row < calcBoard.length - 1; row++) {
      calcBoard[row + 1][col] += calcBoard[row][col]
    }
  }

  // 행렬의 누적합 구하기
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] += calcBoard[row][col]
      console.log(board[row][col])
      if (board[row][col] > 0) answer += 1
    }
  }
  return answer
}

console.log(solution([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]], [[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]))