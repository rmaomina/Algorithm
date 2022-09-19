const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()
.split('\n')

const solution = (arr) => {
  const [first, ...rest] = arr
  const [len, target] = first.split(' ')

  const coins = rest.sort((a, b) => b - a).map(el => Number(el))
  let sum = Number(target)

  let count = 0
  for (let coin of coins) {
    while (sum >= coin) {
      sum -= coin 
      count++
    }
    if (sum === 0) return count
  }
}

console.log(solution(input));
