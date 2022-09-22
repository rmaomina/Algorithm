// for test
const input = require('fs')
	.readFileSync(__dirname + '/input_boj.txt')
	.toString()
	.trim()
	.split('\n')

const [first, ...temp] = input

let arr = temp.map(Number)

// 삽입 정렬
function insertion(arr) {
	for (let i = 1; i < arr.length; i++) {
		let cur = arr[i]
		let left = i - 1
		while (left >= 0 && arr[left] > cur) {
			arr[left + 1] = arr[left]
			arr[left] = cur
			left--
		}
	}
	console.log(arr.join('\n'))
}

// 버블 정렬
function bubble(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swap = ''
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = swap
			}
		}
		if (swap === '') break
	}
	console.log(arr.join('\n'))
}

bubble(arr)
console.log('\n')
insertion(arr)
