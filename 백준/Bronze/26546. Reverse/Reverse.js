
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let result = "";

const [n, ...array] = input.split("\n")

for (let operator of array) {
    const [word, startIdx, endIdx] = operator.split(" ")
    result += word.substring(0, startIdx)
    result += word.substring(endIdx)
    result += "\n"
}

console.log(result)