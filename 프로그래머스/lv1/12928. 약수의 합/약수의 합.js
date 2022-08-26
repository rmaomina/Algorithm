function solution(number) {
    let answer = 0;
    let sqrt = Math.floor(Math.sqrt(number))
    
    for (let i = 1; i <= sqrt; i++) {
        if (number % i === 0) {
            answer += i
            if (i * i !== number) answer += number/i     
        }
    }
    return answer;
}