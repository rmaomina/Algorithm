// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const num = require('fs').readFileSync(path).toString().trim()
let deathNum = 666
let movie = ''
let count = 1

// 666부터 countUp
while (+num >= count) { // 666 >= 667
  if (deathNum.toString().indexOf('666') !== -1) {
    count++
    movie = deathNum
  }
  deathNum++ 
}

console.log(movie)
