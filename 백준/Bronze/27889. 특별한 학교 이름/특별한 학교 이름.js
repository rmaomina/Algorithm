
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

if (input === "NLCS") {
    console.log("North London Collegiate School");
} else if (input === "BHA") {
    console.log("Branksome Hall Asia")
} else if (input === "KIS") {
    console.log("Korea International School");
} else if (input === "SJA") {
    console.log("St. Johnsbury Academy")
}

