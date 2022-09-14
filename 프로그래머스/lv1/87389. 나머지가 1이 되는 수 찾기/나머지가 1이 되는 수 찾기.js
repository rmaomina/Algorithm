function solution(n) {
    let answer = 0;
    
    // n이 10일 때, 10 % 9 === 1
    for (let i = n - 1; i > 0; i--) {
        if (n % i === 1) answer = i
    }
    return answer;
}