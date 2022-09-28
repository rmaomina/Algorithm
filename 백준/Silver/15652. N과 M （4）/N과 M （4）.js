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

  const dfs = (index, size) => {
    if (size === M) {
      answer += `${output.join(' ')}\n`
      return
    }

    for (let i = index; i < N; i++) {
      output.push(i + 1)
      dfs(i, size + 1)

      output.pop()
    }
  }

  dfs(0, 0)
  return answer
}

let [N, M] = input.map(Number)

console.log(solution(N, M))
