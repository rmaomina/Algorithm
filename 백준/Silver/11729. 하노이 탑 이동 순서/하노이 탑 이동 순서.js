const input = require('fs')
.readFileSync('/dev/stdin')
.toString()
.trim()

let result = []

const hanoi = (num, from, sub, to) => { // 원판갯수, 출발, 보조, 목적
  if (num === 0) return

  hanoi(num - 1, from, to, sub)
  result.push([from, to])
  hanoi(num - 1, sub, from, to)
  return result
}

result = hanoi(+input, 1, 2, 3)

console.log(result.length)
console.log(result.map(el => el.join(' ')).join('\n'))
