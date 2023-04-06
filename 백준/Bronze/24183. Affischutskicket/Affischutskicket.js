const path = '/dev/stdin'

let input = require('fs')
.readFileSync(path)
.toString()
.trim()
.split(" ")

const [C4, A3, A4] = input.map(Number)

 const envelop = C4 * (229 * 324) * 2
 const poster = A3 * (297 * 420) * 2
 const sheet = A4 * (210 * 297)

 console.log((envelop + poster + sheet) * 0.000001)