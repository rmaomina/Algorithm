// 여러개의 최소공배수를 구하는 방법: 
// repeat(두 수의 곱/두 수의 최소공약수)

// 유클리드 호제법 (최대공약수)
// ** a를 b로 나눈 나머지를 r이라고 한다. ==> 24 / 16 = 8(r)
// ** GCD(a,b) = GCD(b,r)과 같다. ==> 24,16의 최대공약수는 16,8의 최대공약수와 같다.
// ** r이 0이면 그 때 b가 최대 공약수이다. ==> r이 0이되면 b가 최대공약수이다. 
// ** GCD(24,16) = GCD(16,8) = GCD(8,0) = 8 

function solution(n, m) {

  function gcd(a, b) {
    if (a % b === 0) return b
    return gcd(b, a % b)
  }

  // [최대공약수, 최소공배수]
  return [gcd(n, m), n * m / gcd(n, m)]
}

console.log(solution(3, 12))
console.log(solution(2, 5))