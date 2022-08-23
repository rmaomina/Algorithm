function solution(board, moves) {
  // 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
  // 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩
  let count = 0;
  let basket = []

  for (let i = 0; i < moves.length; i++) { 
    console.log(moves[i]) // 1
    for (let j = 0; j < board.length; j++) {
      let char = board[j][moves[i] - 1] // board 첫번째 줄의 첫번째 칸 
      if (char !== 0) {
        if (basket[basket.length - 1] === char) {
          basket.pop()
          count += 2
        } else {
          basket.push(char)
        }
        board[j][moves[i] - 1] = 0
        break
      }
    }
  }
  console.log(basket)

  return count;
}

const arr = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]

console.log(solution(arr, [1,5,3,5,1,2,1,4]))