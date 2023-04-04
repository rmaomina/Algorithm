
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split("\n")

const [discount, price] = input.map(Number)
const discountRate = Math.floor(discount / 5)
let prices = [price]

prices[1] = price - 500  < 0 ? 0 : price - 500
prices[2] = price * .9
prices[3] = price - 2000 < 0 ? 0 : price - 2000
prices[4] = price * .75

console.log(Math.min(...prices.slice(0, discountRate + 1)))