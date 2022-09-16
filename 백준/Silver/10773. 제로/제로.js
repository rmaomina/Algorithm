const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [len, ...arr] = input

let note = []
for (let num of arr) {
  if (num !== '0') {
    note.push(Number(num))
  } else {
    note.pop()
  }
}

let sum = 0
for (let num of note) sum += num;

console.log(sum);