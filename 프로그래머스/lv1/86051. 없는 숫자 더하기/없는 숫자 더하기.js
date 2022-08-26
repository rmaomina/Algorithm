function solution(numbers) {
    let answer = 0;
    
    for (let i = 0; i < 10; i++){
        if (numbers.indexOf(i) === -1) answer += i; 
    } 
    return answer;
}

console.log((solution([1,2,3])))
console.log((solution([9,7,5,1,2])))