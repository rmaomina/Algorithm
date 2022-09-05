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