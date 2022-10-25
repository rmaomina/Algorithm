// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
let result = ''

input.forEach((el, idx) => {
	let count = 0
    // 종료 조건
  if (el === '#') return 
  el.split('').forEach((v, i) => {
    // 배열(한 줄)에 모음이 있으면 
		if (v.match(/[AaEeIiOoUu]/g)) count++
	})
  result += `${count}\n`
})

console.log(result)
