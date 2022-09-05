const bfs = (n, m, board) => {

  // 상하좌우 이동경로 중에 1이 있으면 큐에 담아 
  // 이미 지나왔거나 0, 괴물이 있거나 0임. 
  // 노드끼리 이동은 상(N-1), 하(N+1), 좌(M-1), 우(M+1)
  // 대신 N은 1~5, M은 1~6 범위를 벗어나면 없음. (-1씩 해서 인덱스 범위로) 
  // 이동이 확정(?)되면 steps를 +1 

  let queue = [[0,0]]
  let steps = 0 
  
  n -= 1
  m -= 1

  const aux = ([x, y]) => {
    // 벽이라면
    if (board[x][y] < 1) return -1
    
    // 목적지라면 
    else if (x === n && y === m) return '*'
    
    // 다음 상하좌우로 하나라도 움직일 수 있으면 
    else if ((board[x + 1] !== undefined && board[x + 1][y]) || (board[x - 1] !== undefined && board[x - 1][y]) || board[x][y - 1] || board[x][y + 1]){
      if (board[x - 1] !== undefined && board[x - 1][y]) queue.push([x - 1, y]) // 상
      if (board[x + 1] !== undefined && board[x + 1][y]) queue.push([x + 1, y]) // 하
      if (board[x][y - 1] !== undefined && board[x][y - 1]) queue.push([x, y - 1]) // 좌
      if (board[x][y + 1] !== undefined && board[x][y + 1]) queue.push([x, y + 1]) // 우
    
      // 하나도 움직일 수 없으면 
    } else {
      return -1
    }

    return 0
  }

  while (queue.length > 0) {
    let [x, y] = queue[0]
    let result = aux([x, y])

    if (result === '*') {
      steps += 1
      break
    } 
    if (result >= 0) {
      steps += 1
    } 
    
    board[x][y] = result
    queue = queue.slice(1)
  
    console.log(queue)
  }

  return steps
}

const table = [[1, 0, 1, 0, 1, 0], [1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]
console.table(table)
console.log(bfs(5, 6, table))