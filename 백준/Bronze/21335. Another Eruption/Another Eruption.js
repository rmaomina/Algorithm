
const path = '/dev/stdin'

const input = require('fs')
.readFileSync(path)
.toString()
.trim()


const m = +input
const r = (Math.sqrt(m / Math.PI))
console.log(r * 2 * Math.PI)