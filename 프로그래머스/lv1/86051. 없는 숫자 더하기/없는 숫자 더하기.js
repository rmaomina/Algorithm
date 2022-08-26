function solution(numbers) {
    let answer = 0;
    
    // for (let i = 0; i < 10; i++){
    //     if (numbers.indexOf(i) === -1) answer += i; 
    // } 
    // return answer;

    // 다른 사람 풀이
    return 45 - numbers.reduce((acc, cur) => acc + cur)
}

console.log((solution([1,2,3])))
console.log((solution([9,7,5,1,2])))