
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [groups, person, positiveGroups] = input.split(" ").map(Number)

const kitEach = groups * person;
const kitGroup = positiveGroups * person + groups

if (kitEach === kitGroup) {
    console.log(0)
} else if (kitEach < kitGroup) {
    console.log(1)
} else {
    console.log(2)
}