// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ')

let [S, K, H] = input.map(Number)

if (S + K + H >= 100) console.log('OK')
else {
  let school = Math.min(S, K, H)
  if (school === S) console.log('Soongsil')
  if (school === K) console.log('Korea')
  if (school === H) console.log('Hanyang')
}