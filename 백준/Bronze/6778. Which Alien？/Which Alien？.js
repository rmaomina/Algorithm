// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const [antenna, eyes] = input.map(Number)

let result = ''

if (antenna >= 3 && eyes <= 4 ) {
  result += 'TroyMartian\n'
} 
if (antenna <= 6 && eyes >= 2) {
  result += 'VladSaturnian\n'
} 
if (antenna <= 2 && eyes <= 3) {
  result += 'GraemeMercurian\n'
}

console.log(result)