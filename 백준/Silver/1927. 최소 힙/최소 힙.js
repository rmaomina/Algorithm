const path = __dirname + '/input_boj1.txt'
// const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let arr = input.slice(1).map(Number)

class MinHeap {
	constructor() {
		this.heap = []
	}

	insertItem(item) {
		this.heap.push(item)
		this.heapifyUp()
	}

	deleteItem() {
		const minValue = this.heap[0]
		this.heap[0] = this.heap[this.heap.length - 1]
		this.heap.length--
		if (this.heap.length > 1) this.heapifyDown()

		return minValue
	}

	swapItem(index1, index2) {
		const temp = this.heap[index1]
		this.heap[index1] = this.heap[index2]
		this.heap[index2] = temp
	}

	heapifyUp(index = this.heap.length - 1) {
		if (index < 1) return
		let parentIndex = Math.floor((index - 1) / 2)

		if (this.heap[parentIndex] <= this.heap[index]) return

		this.swapItem(index, parentIndex)
		index = parentIndex
		this.heapifyUp(index)
	}

	heapifyDown(index = 0) {
		const length = this.heap.length
		const left = 2 * index + 1
		const right = 2 * index + 2
		let smallest = index

		if (left > length - 1 && right > length - 1) return

		if (this.heap[left] < this.heap[smallest]) smallest = left
		if (this.heap[right] < this.heap[smallest]) smallest = right

		if (index !== smallest) {
			this.swapItem(index, smallest)
			this.heapifyDown(smallest)
		}
	}
}

const minHeap = new MinHeap()
let result = ''

for (let i = 0; i < arr.length; i++) {
	if (arr[i] !== 0) {
		minHeap.insertItem(arr[i])
	} else {
		if (minHeap.heap.length === 0) {
			result += '0' + '\n'
		} else {
			let item = minHeap.deleteItem()
			result += String(item) + '\n'
		}
	}
}

console.log(result)
