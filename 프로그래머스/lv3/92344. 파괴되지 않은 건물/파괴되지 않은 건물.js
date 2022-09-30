function solution(board, skill) {
  let answer = 0
  let calcBoard = Array.from(Array(board.length + 1), () => new Array(board[0].length + 1).fill(0))

  for (let info of skill) {
    let [type, r1, c1, r2, c2, damage] = info
    if (type === 1) damage *= -1

    calcBoard[r1][c1] += damage
    calcBoard[r1][c2 + 1] -= damage
    calcBoard[r2 + 1][c1] -= damage
    calcBoard[r2 + 1][c2 + 1] += damage
  }

  for (let row = 0; row < calcBoard.length - 1; row++) {
    for (let col = 0; col < calcBoard[row].length - 1; col++) {
      calcBoard[row][col + 1] += calcBoard[row][col]
    }
  }

  for (let col = 0; col < calcBoard[0].length - 1; col++) {
    for (let row = 0; row < calcBoard.length - 1; row++) {
      calcBoard[row + 1][col] += calcBoard[row][col]
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] += calcBoard[row][col]
      if (board[row][col] > 0) answer += 1
    }
  }
    
  return answer
}
