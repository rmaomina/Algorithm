function solution(n) {
  let answer = 0
  
  const nQueen = (board, row) => {
    if(row === n) {
      answer += 1
    } else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i
        if(checker(board, row + 1)) nQueen(board, row + 1);
      }
    }
  }

  const checker = (board, row) => {
    for (let i = 1 ; i < row ; i++) {
      if (board[i] === board[row]) return false
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false
    }
    return true
  }

  for (let i = 1; i <=n; i++) {
    let board = new Array(n + 1).fill(0)
    board[1] = i
    nQueen(board, 1)
  }
  
  return answer;
}
