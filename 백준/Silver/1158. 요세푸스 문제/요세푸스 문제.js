// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()

let [N, K] = input.split(' ').map(Number)

class CircleQueue {
  constructor(n) {
    this.buffer = n + 1 // 8
    this.queue = []
    this.front = 0 // index 0
    this.rear = 0 // ~ index 6
  }
  
  isEmpty() {
    return this.front === this.rear
  }

  isFull() {
    return (this.rear + 1) % this.buffer === this.front
  }

  enQueue(item) {
    if (this.isFull()) return 'Queue Fulled'
    this.queue[this.rear] = item
    this.rear = (this.rear + 1) % this.buffer
  }

  deQueue() {
    if (this.isEmpty()) return 'Empty Queue'
    let item = this.queue[this.front]
    this.queue[this.front] = null
    this.front = (this.front + 1) % this.buffer
    return item
  }
}

let deckOfCards = new CircleQueue(N)

for (let i = 1; i <= N; i++) { // 1,2,3,4,5,6,7
  deckOfCards.enQueue(i)
}

let result = []
let index = 1

while (!deckOfCards.isEmpty()) {
  if (index % K === 0) { // K번째 수
    result.push(deckOfCards.deQueue())
  } else {
    deckOfCards.enQueue(deckOfCards.deQueue())
  }
  index++
}

console.log(`<${result.join(', ')}>`)
