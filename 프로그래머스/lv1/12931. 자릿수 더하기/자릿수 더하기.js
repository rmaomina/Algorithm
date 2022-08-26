function solution(numbers)
{
    let answer = 0;
    for (let n of String(numbers)) {
        answer += Number(n)
    }

    return answer;
}