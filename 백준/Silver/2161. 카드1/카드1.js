// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
// 백준 카드1 LinkedList로 다시 도전

class Node {
	constructor(value) {
		this.value = value
		this.prev = null
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	add(value) {
		const newNode = new Node(value)

		if (!this.head) this.head = newNode
		else {
			this.tail.next = newNode
			newNode.prev = this.tail
		}

		this.tail = newNode
		this.size++

		return newNode
	}

	getHead() {
		return this.head.value
	}

	removeHead() {
    let deleted = this.head.value
		this.head = this.head.next
		this.head.prev = null
		this.size--
    return deleted
	}

	getSize() {
		return this.size
	}
}

const node = new LinkedList()
let result = ''

for (let i = 1; i <= input; i++) {
	node.add(i)
}

while (node.getSize() !== 1) {
	result += node.removeHead() + ' '
	node.add(node.getHead())
	node.removeHead()
}
result += node.getHead()

console.log(result)
