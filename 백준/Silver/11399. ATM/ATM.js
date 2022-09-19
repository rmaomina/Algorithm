const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const solution = (arr) => {
  const [first, second] = arr
  const waitingLine = second.split(' ')

  waitingLine.sort((a, b) => a - b)

  let sum = 0
  waitingLine.reduce((acc, cur) => {
    let turn = acc + +cur
    sum += turn
    return turn
  }, 0)

  return sum
}

console.log(solution(input));