// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [perPeople, newspaper] = input.map(el => el.split(' ').map(Number))
const expected = perPeople[0] * perPeople[1]

let result = newspaper.map(el => el - expected).join(' ')
console.log(result)

