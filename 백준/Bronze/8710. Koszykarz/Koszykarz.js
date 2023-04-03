
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

let [tall, target, growing] = input.map(Number)
let count = 0;

while (tall < target) {
  tall += growing
  count ++
}

console.log(count)