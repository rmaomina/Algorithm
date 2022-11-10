// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')

let [N, M] = input[0].split(' ').map(Number)
let bung = input.slice(1)

let answer = bung.map(el => el.split('').reverse().join(''))
console.log(answer.join('\n'))