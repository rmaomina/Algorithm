// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('\n')
.map(Number)

const month = input[0]
const day = input[1]

if (month < 2 || (month === 2 && day < 18)) console.log('Before')
else if (month === 2 && day === 18) console.log('Special')
else if (month > 2 || (month === 2 && day > 18)) console.log('After')