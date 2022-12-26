
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [N, ...gifticon] = input

let result = gifticon.reduce((a, c) => {
  if (Number(c.slice(2)) <= 90) {
    return a + 1
  } else {
    return a
  }
}, 0)

console.log(result)