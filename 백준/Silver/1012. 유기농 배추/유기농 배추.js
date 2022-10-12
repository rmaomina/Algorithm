// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [testCase, ...info] = input

// 상하좌우 검사할 position
let dx = [0, 0, -1, 1]
let dy = [-1, 1, 0, 0]
let result = ''

while (info.length > 0) {
  let [M, N, K] = info.shift().split(' ').map(Number)
  let farm = Array.from({length: N}, () => new Array(M).fill(false))
  let answer = 0
  
  const needVisit = []
  for (let j = 0; j < K; j++) {
    let [col, row] = info.shift().split(' ').map(Number)
    farm[row][col] = true
    needVisit.push([row, col])
  }

  const dfs = (r, c) => {
    if (!farm[r][c] || farm[r][c] === -1) return
    // 방문 처리 
    farm[r][c] = -1
    // 상하좌우 순서대로 위치 조정해 봄. 
    for (let i = 0; i < 4; i++) {
      let nc = c + dx[i]
      let nr = r + dy[i]
      // 범위 안에 있으면 방문처리하고 다음 위치에서 dfs 호출
      if (nr >= 0 && nc >= 0 && nr < N && nc < M) {
        dfs(nr, nc)
      }
    }
  }

  while (needVisit.length > 0) {
    let [row, col] = needVisit.shift()
    // 방문했다는 표시 
    if (farm[row][col] !== -1) {
      dfs(row, col)
      answer++
    }
  }
  result += answer + '\n'
}

console.log(result)
