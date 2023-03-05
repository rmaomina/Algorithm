// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

let box = [, 2, 4]

for (let i = 1; i <= +input; i++){
  if (!box[i]) box[i] = box[i - 1] * 2
}

console.log(box[+input])
