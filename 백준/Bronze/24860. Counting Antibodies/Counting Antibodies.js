
// const path = __dirname + '/input_boj5.txt'
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [Vk, Jk] = input[0].split(" ").map(Number)
const [Vl, Jl] = input[1].split(" ").map(Number)
const [Vh, Dh, Jh] = input[2].split(" ").map(Number)

// Calculate the number of possible combinations for each chain
const combinationsK = Vk * Jk;
const combinationsL = Vl * Jl;
const combinationsH = Vh * Dh * Jh;

// Calculate the total number of possible immunoglobulin variants
const variants = (combinationsK + combinationsL) * combinationsH;

console.log(variants);