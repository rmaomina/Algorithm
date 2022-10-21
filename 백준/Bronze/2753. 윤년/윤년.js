// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const year = require('fs').readFileSync(path).toString().trim()

if (+year % 4 === 0 && (+year % 100 !== 0 || +year % 400 === 0)) {
  console.log(1)
} else {
  console.log(0)
}
