
// 숫자 n은 1 <= n <= 1,000,000
// 진수 k는 3 <= k <= 10 

function solution(n, k) {
  let baseArr = n.toString(k).split('0').filter(el => el !== '')
  let primeArr = baseArr.filter(el => isPrime(Number(el)))

  return primeArr.length;
}

function isPrime(num) {
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) return false;
}
return num >= 2;
}


console.log(solution(437674, 3))
console.log(solution(110011, 10))