function solution(n) {
    let answer = String(n).split('').sort((a, b) => b - a);

    return Number(answer.join(''));
}