function solution(absolutes, signs) {
    let answer = 0;
    answer = absolutes.reduce((acc, cur, i) => {
        if (signs[i]) {
            return acc += cur
        } else {
            return acc -= cur
        }
    }, 0)

    return answer;
}