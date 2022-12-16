
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [by, bm, bd] = input[0].split(' ').map(Number)
const [sy, sm, sd] = input[1].split(' ').map(Number)

let age1 = 0
let age2 = sy - by + 1
let age3 = sy - by

if (sy > by) {
  sm > bm || (sm === bm && sd >= bd) ? age1 = sy - by : age1 = sy - by - 1
}

console.log(`${age1}\n${age2}\n${age3}`)
