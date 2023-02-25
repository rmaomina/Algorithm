
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const [time, beer] = input.split(' ').map(Number)

if (time >= 12 && time <= 16 && beer === 0) {
  console.log('320')
} else {
  console.log('280')
}

