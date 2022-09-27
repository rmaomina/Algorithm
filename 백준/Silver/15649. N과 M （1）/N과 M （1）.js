
// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ')

function solution(N, M) {
  let answer = ''
  const output = []
  let visited = new Array(N).fill(false)

  const dfs = (size) => {
    if (size === M) {
      answer += `${output.join(' ')}\n`
      return
    }

    for (let i = 0; i < N; i++) {
      if (visited[i] === true) continue
      visited[i] = true
      output.push(i + 1)
      dfs(size + 1)
      output.pop()
      visited[i] = false
    }
  }

  dfs(0)
  return answer
}

let [N, M] = input.map(Number)

console.log(solution(N, M))
