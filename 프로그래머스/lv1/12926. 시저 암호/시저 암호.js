function solution(s, n) {
    // 문자열 <-> 아스키코드(+n)
    let answer = ''
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            answer += ' '
            continue
        }
        const code = arr[i].charCodeAt(0)
        if ((code + n > 90 && code <= 90) || code + n > 122) {
            answer += String.fromCharCode(code + n - 26)
        } else {
            answer += String.fromCharCode(code + n)
        }
    }
    return answer;
}


