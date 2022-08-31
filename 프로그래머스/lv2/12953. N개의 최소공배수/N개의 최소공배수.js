function solution(arr) {
    // n개의 수의 최소공배수는 n개의 수들의 배수 중 공통이 되는 가장 작은 숫자
    
    // 여러개의 최소공배수를 구하는 방법: 
    // repeat(두 수의 곱/두 수의 최소공약수)
    
    // acc는 arr[0], cur은 arr[1]
    let answer = arr.reduce((acc, cur) => { 
        // 최소공배수 구하기
        // 2 * 6 / 2 = 6
        // 6 * 8 / 2 = 24
        // 
        return acc * cur / greatest(acc, cur)
    })

    return answer;
}

// 2 % 6 === 2
// 6 % 8 === 6
// 최대공약수 구하기
function greatest(a, b) {
        if (a % b === 0) return b
        return greatest(b, a % b) 
        // 1: 8, 6
        // 2: 2 리턴
    }