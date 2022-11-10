// const path = __dirname + "/input_boj.txt";
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(' ')
.map(Number)

const [N, M] = input

if (M <= 2) console.log('NEWBIE!')
else if (M <= N) console.log('OLDBIE!')
else console.log('TLE!')