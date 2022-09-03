function solution(fees, records) {

  const [baseMin, baseFee, unitMin, unitFee] = fees
  const data = {}

  // 공식: baseFee + ((timeSum - baseMin) / unitMin) x unitFee = 14600
  // 시간 기록 추가하여 기록 만들기 
  for (let el of records) {
    const [time, plate, status] = el.split(' ')
    if (!data[plate]) data[plate] = []
    data[plate].push(calcMin(time.split(':')))
  }

  let sorted = Object.keys(data).sort((a,b) => a - b)
  let totalFee = []

  sorted.map((el) => {
    let car = data[el]
    if (car.length % 2 === 1) car.push(1439)
    
    let total = 0
    for (let c = 0; c < car.length; c += 2) {
      total += car[c + 1] - car[c]
    }
    if (total < baseMin) total = baseMin
    totalFee.push(baseFee + Math.ceil((total - baseMin) / unitMin) * unitFee)
  })

  return totalFee;
}

function calcMin([hour, min]) {
  return Number(hour) * 60 + Number(min)
}

// [14600, 34400, 5000]
console.log(solution([180, 5000, 10, 600],["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))

// [0, 591]
console.log(solution([120, 0, 60, 591],["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]))

// [14841]
console.log(solution([1, 461, 1, 10],["00:00 1234 IN"]))