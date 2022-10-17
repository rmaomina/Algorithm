// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
// console.log(input)

const str = input
let result = new Set()

for (let i = 0; i < str.length; i++) {
	for (let j = i; j < str.length; j++) {
    let subStr = str.substring(i, j + 1)
    // console.log(subStr)
	result.add(subStr)
	}
}

console.log(result.size)
