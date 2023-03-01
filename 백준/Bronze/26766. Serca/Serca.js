
// const path = __dirname + '/input_boj3.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()

let result = ""

for (let i = 0; i < +input; i++) {
  result += " @@@   @@@ \n"
  result += "@   @ @   @\n"
  result += "@    @    @\n"
  result += "@         @\n"
  result += " @       @ \n"
  result += "  @     @  \n"
  result += "   @   @   \n"
  result += "    @ @    \n"
  result += "     @     \n"
}

console.log(result)