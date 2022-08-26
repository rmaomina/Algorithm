function solution(numbers) {

    // 다른 사람 풀이
    return 45 - numbers.reduce((acc, cur) => acc + cur)
}

console.log((solution([1,2,3])))
console.log((solution([9,7,5,1,2])))