// for boj submit
// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

// for test
const input = require('fs')
.readFileSync(__dirname + '/input_boj.txt')
.toString()
.trim()
.split('\n')

console.log(input)