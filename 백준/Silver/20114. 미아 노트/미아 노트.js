// const path = __dirname + '/input_boj.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')

let [first, ...array] = input
const [N, H, W] = first.split(' ').map(Number)
let temp = Array.from({ length: N }).fill(false)

const combined = array.join('')

function sliceByPattern(str, n) {
  return str.match(new RegExp(`.{1,${n}}`, 'g'))
}

let pattern = sliceByPattern(combined, W)
pattern.forEach((el, idx) => {
  if (!temp[idx % N]) {
    temp[idx % N] = el.replace(/[?]/g, '')
  }
});

let result = temp.map(el => {
  return el.length === 0 ? '?' : el[0]
}).join('')

console.log(result)

