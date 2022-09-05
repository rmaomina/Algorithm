function solution(a, b) {
    let answer = 0;
    let from = a
    let to = b
    
    if (a > b) {
        from = b
        to = a
    }
    
    for (let i = from; i <= to; i++) {
        answer += i
    }
    return answer;
}