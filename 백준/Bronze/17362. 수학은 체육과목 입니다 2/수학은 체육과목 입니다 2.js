// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim()
const num = BigInt(input)

if (num % 8n === 1n) console.log('1')
if (num % 8n === 2n) console.log('2')
if (num % 8n === 3n) console.log('3')
if (num % 8n === 4n) console.log('4')
if (num % 8n === 5n) console.log('5')
if (num % 8n === 6n) console.log('4')
if (num % 8n === 7n) console.log('3')
if (num % 8n === 0n) console.log('2')