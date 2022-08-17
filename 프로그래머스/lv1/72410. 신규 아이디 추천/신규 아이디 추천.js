function solution(new_id) {
    let answer = '';
    
    // 1단계 - 소문자로 변환
    answer = new_id.toLowerCase()
    
    // 2단계 - 소문자, 숫자, _.- 제외 
    answer = answer.replace(/[^\w-._]+/g, '')
    
    // 3단계 - .이 2번 이상 반복 -> .로
    answer = answer.replace(/\.+\./g, '.')
    
    // 4단계 - 처음이나 끝의 . 제거 
    answer = answer.replace(/^\./g, '')
    answer = answer.replace(/\.$/g, '')
    
    // 5단계 - 빈 문자열이라면 'a'를 대입
    if (answer === '') answer = 'a'
    
    // 6단계 - 16자 이상이면, 이상 제거 & 마침표 다시 제거 
    if (answer.length > 15) answer = answer.substring(0, 15) // 20 > 15
    answer = answer.replace(/\.$/g, '')
    
    // 7단계 - 2자 이하라면, 마지막 문자를 3이 될 때까지 붙인다. 
    while (answer.length < 3) { // 2 < 3
        answer += answer.substring(answer.length - 1)
    }
    
    return answer;
}