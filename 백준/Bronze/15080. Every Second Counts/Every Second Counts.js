
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const startTime = input[0].split(" : ").map(Number)
const endTime = input[1].split(" : ").map(Number)

function calcTime([h, m, s]) {
  let hh = h * (60 * 60)
  let mm = m * 60
  let ss = s

  return hh + mm + ss
}

const startTotal = calcTime(startTime)
const endTotal = calcTime(endTime)

if (endTotal >= startTotal) {
  console.log(endTotal - startTotal)
} else {
  console.log((24 * 60 * 60) - startTotal + endTotal)
}
