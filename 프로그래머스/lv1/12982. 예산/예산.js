function solution(d, budget) {
    let answer = 0;
    let sorted = d.sort((a, b) => a - b)
    console.log(sorted)
    for (let i = 0; i < sorted.length; i++) {
        if (budget >= sorted[i]) { // 10 >= 2
            budget -= sorted[i] // 8
            console.log(budget)
            answer += 1
        } else {
            return answer;
        }
    }
    return answer;
}