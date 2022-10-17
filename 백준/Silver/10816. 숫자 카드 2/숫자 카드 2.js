// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

// 10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10

// 백준 "숫자 카드 2"

const cards = input[1].split(' ').map(Number)
const match = input[3].split(' ').map(Number)

let result = []
let deck = new Map()

for (let num of cards) {
  if (deck.has(num)) deck.set(num, deck.get(num) + 1)
  else deck.set(num, 1)
}

// console.log(deck)

for (let num of match) {
  if (deck.has(num)) result.push(deck.get(num))
  else result.push(0)
}

console.log(result.join(' '))
