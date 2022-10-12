// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const chessBoard = input.slice(1)
const answer = []

const boardTemp1 = Array.from({ length: 8 }, (v, i) => {
	let color = ''
	if (i % 2 === 0) color = 'BW'
	else color = 'WB'
	return color.repeat(4)
})

const boardTemp2 = Array.from({ length: 8 }, (v, i) => {
	let color = ''
	if (i % 2 === 0) color = 'WB'
	else color = 'BW'
	return color.repeat(4)
})

// console.table(boardTemp1)
// console.table(boardTemp2)

function checkTemplete(n, m, boardType) {
	// 행과 열의 첫번째 좌표 여기서부터 8*8을 템플릿과 비교
	let count1 = 0
  // 0, 0 -> 0, 1 -> 0, 2 ...
	for (let i = n; i < n + 8; i++) { // 상대좌표부터 +8행까지 
		for (let j = m; j < m + 8; j++) { // 상대좌표부터 +8열까지 
			if (chessBoard[i][j] !== boardType[i - n][j - m]) count1++ // 0, 0 ~ 8, 8 
		}
	}

  // console.log(count1)
	return count1
}

for (let i = 0; i < N - 7; i++) {
	// 0 ~ N 행의 -7보다 작을 때 까지 // 10행이면 최대 경우는 3행까지만, 열도 마찬가지 
	for (let j = 0; j < M - 7; j++) {
		answer.push(checkTemplete(i, j, boardTemp1))
		answer.push(checkTemplete(i, j, boardTemp2))
	}
}

console.log(Math.min(...answer))
