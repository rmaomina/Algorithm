// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split('/')
.map(Number)


const [K, D, A] = input

if (K + A < D || D === 0) console.log('hasu')
else console.log('gosu')

