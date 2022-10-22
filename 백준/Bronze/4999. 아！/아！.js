// const path = __dirname + '/input_boj1.txt'
const path = '/dev/stdin'

const input = require('fs').readFileSync(path).toString().trim().split('\n')
const patient = input[0].substring(0, input[0].length - 1)
const doctor = input[1].substring(0, input[1].length - 1)

if (patient.length >= doctor.length) console.log('go')
else console.log('no')


