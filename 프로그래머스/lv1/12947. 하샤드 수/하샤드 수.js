function solution(x) {

    let quotient = 0
    for (let n of String(x)) {
        quotient += Number(n)
    }
    if (x % quotient === 0) {
        return true
    }
    return false;
}