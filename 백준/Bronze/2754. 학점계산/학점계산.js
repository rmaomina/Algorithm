// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const score = require('fs').readFileSync(path).toString().trim()

let result = ''

if (score === 'A+') result = '4.3'
else if (score === 'A0') result = '4.0'
else if (score === 'A-') result = '3.7'
else if (score === 'B+') result = '3.3'
else if (score === 'B0') result = '3.0'
else if (score === 'B-') result = '2.7'
else if (score === 'C+') result = '2.3'
else if (score === 'C0') result = '2.0'
else if (score === 'C-') result = '1.7'
else if (score === 'D+') result = '1.3'
else if (score === 'D0') result = '1.0'
else if (score === 'D-') result = '0.7'
else result = '0.0'

console.log(result)
