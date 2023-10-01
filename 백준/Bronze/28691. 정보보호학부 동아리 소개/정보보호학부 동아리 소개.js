
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

if (input === "M") console.log("MatKor")
if (input === "W") console.log("WiCys")
if (input === "C") console.log("CyKor")
if (input === "A") console.log("AlKor")
if (input === "$") console.log("$clear")