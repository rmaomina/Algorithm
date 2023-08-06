
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [n, ...players] = input.split("\n");

let result = "";

for (let player of players) {
    const playerOver10 = player.split(" ").filter(el => Number(el) >= 10)
    const playerOver10Count = playerOver10.length;

    if (playerOver10Count === 0) {
        result += `${player}\nzilch\n`
    } else if (playerOver10Count === 1) {
        result += `${player}\ndouble\n`
    } else if (playerOver10Count === 2) {
        result += `${player}\ndouble-double\n`
    } else if (playerOver10Count === 3) {
        result += `${player}\ntriple-double\n`
    }
    result += "\n"
}

console.log(result)