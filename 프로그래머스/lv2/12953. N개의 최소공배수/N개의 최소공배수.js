function solution(arr) {
    // n개의 수의 최소공배수는 n개의 수들의 배수 중 공통이 되는 가장 작은 숫자
    
    // 여러개의 최소공배수를 구하는 방법: 
    // repeat(두 수의 곱/두 수의 최소공약수)
    
    // 유클리드 호제법 
    // ** a를 b로 나눈 나머지를 r이라고 한다. ==> 24 / 16 = 8(r)
    // ** GCD(a,b) = GCD(b,r)과 같다. ==> 24,16의 최대공약수는 16,8의 최대공약수와 같다.
    // ** r이 0이면 그 때 b가 최대 공약수이다. ==> r이 0이되면 b가 최대공약수이다. 
    // ** GCD(24,16) = GCD(16,8) = GCD(8,0) = 8 

    // acc는 arr[0], cur은 arr[1]
    let answer = arr.reduce((acc, cur) => { 
        // 최소공배수 구하기
        // 2 * 6 / 2 = 6
        // 6 * 8 / 2 = 24
        // ...
        return acc * cur / gcd(acc, cur)
    })
    
    // 2 % 6 === 2
    // 6 % 8 === 6
    // 최대공약수 구하기
    function gcd(a, b) {
        if (a % b === 0) return b
        return gcd(b, a % b) 
        // 1: 8, 6
        // 2: 2 리턴
    }

    return answer;
}

console.log(solution([2,6,8,14]))
console.log(solution([1,2,3]))
console.log(solution([100,99,24,7]))

