
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("");

const litera = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    s: 5
}

const result = input.map(el => {
    if (litera[el] !== undefined) {
        return litera[el];
    } else {
        return el;
    }
}).join("");

console.log(result);
