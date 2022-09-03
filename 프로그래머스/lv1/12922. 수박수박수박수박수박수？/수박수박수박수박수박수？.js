function solution(n) {
    let answer = '';
    const PATTERN = '수박'
    let repeat = Math.ceil(n / PATTERN.length)
    
    for (let i = 0; i < repeat; i++) answer += PATTERN
    console.log(typeof answer)
    console.log(typeof repeat)
    return answer.substring(0, n);
}