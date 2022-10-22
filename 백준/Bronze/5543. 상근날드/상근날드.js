// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n').map(Number)
const burgers = input.slice(0, 3)
const beverage = input.slice(3)

let setBurger = []

burgers.forEach(el => {
  setBurger.push(el + beverage[0] - 50)
  setBurger.push(el + beverage[1] - 50)
})

console.log(Math.min(...setBurger))
