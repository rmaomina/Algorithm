function solution(n, k) {
    let answer = 0
    let baseArr = n.toString(k).split('0').filter(el => el !== '')
    let primeArr = baseArr.filter(el => isPrime(Number(el)))

    console.log(baseArr)
    console.log(primeArr)
    return primeArr.length;
}


function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}
