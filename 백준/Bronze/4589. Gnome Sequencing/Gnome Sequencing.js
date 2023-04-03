
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [n, ...gnomes] = input
let result = "Gnomes:\n"

for (let gnome of gnomes) {
  let beards = gnome.split(" ").map(Number)
  let ordered = true
  let preved = beards[0]
  let direction = beards[0] > beards[1] ? "desc" : "asc"

  for (let beard of beards) {
    if (direction === "asc" && beard < preved) ordered = false
    if (direction === "desc" && beard > preved) ordered = false
    preved = beard
  }

  if (ordered) result += "Ordered\n"
  else result += "Unordered\n"
}

console.log(result)