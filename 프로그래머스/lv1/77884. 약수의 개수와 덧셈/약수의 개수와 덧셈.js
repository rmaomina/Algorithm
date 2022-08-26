function solution(left, right) {
    let answer = 0;
    // range(left to right)
    // range[i]의 약수 구하기, 식은? 
    // 소수와 마찬가지로 제곱근만 구해도 됨. 
    // 14이면 약수가 1, 2, 7, 14인데 절반인 1~7까지만 나눠보면 됨. 
    // 36이면 약수가 1, 2, 3, 4, 6, 8, 18, 36 
    // Math.sqrt(36) --> 6 까지만 구해보면 나옴. 

    // 먼저 범위를 구함
    for (let i = left; i <= right; i++) {
        let divisors = [];
        // i가 4이면 1, 2, 3, 4 // 2까지만 반복하도록 
        for (let j = 1; j <= Math.sqrt(i); j++) { 
            // 나누어 떨어지면 j는 약수임 4/1, 4/2, 4/4
            if (i % j === 0) {
                divisors.push(j)
                if (j * j !== i) divisors.push((i/j))
            }
        }
        
        console.log(divisors)
        if (divisors.length % 2 === 0) {
            answer += i
        } else {
            answer -= i
        }
    }
    
    
    return answer;
}