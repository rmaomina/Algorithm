const path = __dirname + '/input_boj.txt'
// const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
// 백준 카드2 LinkedList로 다시 품.

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

    // 만약 node가 없으면 (head가 없으면) ==> head에 생성된 node 추가
		if (!this.head) this.head = newNode
    // 만약 node가 있으면 (head가 있으면) ==> tail에 생성된 node 추가
		else {
			this.tail.next = newNode
			newNode.prev = this.tail
		}

    // tail에 생성된 node 추가
		this.tail = newNode
		this.size++

		return newNode
	}

	getHead() {
		return this.head.value
	}

	removeHead() {
		this.head = this.head.next
		this.head.prev = null
		this.size--
	}

	getSize() {
		return this.size
	}
}

const node = new LinkedList()

for (let i = 1; i <= input; i++) {
	node.add(i)
}

while (node.getSize() !== 1) {
	node.removeHead()
	node.add(node.getHead())
	node.removeHead()
}


console.log(node.getHead())
