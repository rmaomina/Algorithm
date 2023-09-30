
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()

const [n, ...triangles] = input.split("\n");

const result = triangles.map(el => {
    const [area, baseLength] = el.split(" ");
    return `The height of the triangle is ${parseFloat((area * 2) / baseLength).toFixed(2)} units`;
}).join("\n");

console.log(result);