
 // const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const atLove = [
" @@@   @@@  "
,"@   @ @   @ "
,"@    @    @ "
,"@         @ "
," @       @  "
,"  @     @   "
,"   @   @    "
,"    @ @     "
,"     @      "];

const n = +input;
let result = "";
for (let line of atLove) {
    result += line.repeat(n);
    result += "\n";
}

console.log(result);