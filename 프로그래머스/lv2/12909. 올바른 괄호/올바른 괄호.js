function solution(s) {
    let answer = true;
    let record = 0
    for (let letter of s) {
        if (letter === '(') { 
            record++
        } else {
            record-- //d;alksdjfkjsldkjf
        }
        
        if (record < 0) return false
    }
    return record === 0
}