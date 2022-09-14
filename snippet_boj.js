// fs module
const fs = require('fs')

// submit
// const input = fs.readFileSync('/dev/stdin').toString().trim()
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// test
const input = fs.readFileSync(__dirname + '/input_boj.txt').toString()
console.log(input)