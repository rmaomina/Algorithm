// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

// 10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10

// 백준 "숫자 카드 2"
// 해석 필요!!
const N = Number(input.shift())
const card = input.shift().split(' ')
const M = Number(input.shift())
const match = input.shift().split(' ')

let result = []
let deck = new Map()
for (num of card) {
	if (deck.has(num)) deck.set(num, deck.get(num) + 1)
	else deck.set(num, 1)
}

for (num of match) {
	if (deck.has(num)) result.push(deck.get(num))
	else result.push(0)
}

console.log(result.join(' '))
