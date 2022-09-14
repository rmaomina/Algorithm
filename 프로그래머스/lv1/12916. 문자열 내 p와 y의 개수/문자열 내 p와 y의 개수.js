function solution(s){
    let arr = s.toLowerCase().split('')
    let letterP = arr.filter(el => el === 'p').length
    let letterY = arr.filter(el => el === 'y').length
    
    letterP === letterY ? answer = true : answer = false

    return answer;
}