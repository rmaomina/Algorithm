
let today = new Date()

const check = (day) => {
  return day.toString().length < 2 ? `0${day}` : day
}
console.log(`${today.getUTCFullYear()}\n${check(today.getUTCMonth() + 1)}\n${check(today.getUTCDate())}`)