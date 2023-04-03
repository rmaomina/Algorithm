
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

let result = 5 * +input - 400

if (result > 100) {
  result += "\n" + "-1"
} else if (result === 100) {
  result += "\n" + "0"
} else if (result < 100) {
  result += "\n" + 1
}

console.log(result)