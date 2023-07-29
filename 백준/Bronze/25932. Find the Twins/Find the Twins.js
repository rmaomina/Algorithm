
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

let [n, ...array] = input.split("\n")
let result = "";

for (let elem of array) {
    const backNumbers = elem.split(" ")
    const isZackThere = backNumbers.includes("17")
    const isMackThere = backNumbers.includes("18")

    result += elem;
    result += "\n"
    if (isZackThere && isMackThere) {
        result += "both\n"
    } else if (isZackThere) {
        result += "zack\n"
    } else if (isMackThere) {
        result += "mack\n"
    } else {
        result += "none\n"
    }

    result += "\n"
}

console.log(result)