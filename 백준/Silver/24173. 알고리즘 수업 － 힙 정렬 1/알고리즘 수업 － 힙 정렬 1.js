// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let [first, second] = input
let [len, k] = first.split(' ').map(Number)
let arr = second.split(' ').map(Number)
let result = []

const count = (a, b) => {
	if (a > b) result.push([b, a])
	else result.push([a, b])
}

const minHeap = (array, size) => {
	for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
		heapify(array, size, i)
	}

	for (let j = size - 1; j > 0; j--) {
		temp = array[0]
		array[0] = array[j]
		array[j] = temp

		count(array[0], array[j])
		heapify(array, j, 0)
	}
}

const heapify = (array, size, root) => {
	let smallest = root
	const left = 2 * root + 1
	const right = 2 * root + 2

	let temp;

	if (left < size && array[left] < array[smallest]) smallest = left
	if (right < size && array[right] < array[smallest]) smallest = right

	if (smallest !== root) {
		temp = array[root]
		array[root] = array[smallest]
		array[smallest] = temp

		count(array[root], array[smallest])
		heapify(array, size, smallest)
	}
}


minHeap(arr, len)

let answer = result[k - 1] ? result[k - 1].join(' ') : -1
console.log(answer)
