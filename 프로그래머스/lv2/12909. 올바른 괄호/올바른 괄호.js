function solution(s) {
    let answer = true;
    // 반드시 여는 괄호가 먼저 나와야 한다. 
    // 열고 닫는 괄호가 페어가 나온 후는 항상 여는 괄호만 나온다. 
    let record = 0
    for (let letter of s) {
        // "("")""("")" => 0 
        if (letter === '(') { 
            record++
        } else {
            record--
        }
        
        if (record < 0) return false
    }
    return record === 0
}