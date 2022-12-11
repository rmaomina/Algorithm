// const path = __dirname + '/input_boj2.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

const [answer, guesses] = input
const guess = guesses.split(' ').map(Number)

console.log(guess.filter(el => el === +answer).length)