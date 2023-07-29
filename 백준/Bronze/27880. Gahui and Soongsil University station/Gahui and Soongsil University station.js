
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

let result = 0;

for (let elem of input) {
    const [pref, number] = elem.split(" ")
    if (pref === "Es") {
        result += Number(number) * 21
    } else if (pref === "Stair") {
        result += Number(number) * 17
    }
}

console.log(result)