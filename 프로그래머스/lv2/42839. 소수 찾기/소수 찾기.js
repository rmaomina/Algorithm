function solution(n) {
    let answer = []
    // n을 배열로 만든다. ['1', '7']
    const numbers = n.split('')
    // 순열 배열을 만든다. 
    const permutationAll = []

    // 자릿수에 맞춰 Permutation 재귀 함수를 도는데, ...
    for (let r = 1; r <= n.length; r++) {
        // 출력된 결과에 join으로 concat하고 숫자로 변경, []
        const permutationR = Permutation(numbers, r).map((arr) => {
        return parseInt(arr.join(''))
    });
    
    // 최종적으로 순열 배열에 넣어줌. 
    for (let i = 0; i < permutationR.length; i++)
      permutationAll.push(permutationR[i])
    } 

    // 중복 제거하고, 소수이면 answer 배열에 추가. 
    const permutationSet = [...new Set(permutationAll)]
    for (const number of permutationSet) {
        if (isPrime(number)) answer.push(number)
    }

    return answer.length
}

// 재귀 함수 
function Permutation(arr, r) {
    const result = []
    // Base Case: r은 index를 의미함. 하나일 때 종료 // 출력 형태는 ['1']
    if (r === 1) return arr.map((num) => [num])
    // Recursion Case: 첫번쨰 고정(fixed), index, arr가 있다. 
    arr.forEach((fixed, index, org) => {
        // splice와 같은 원리로 반복하면서 한 글자를 제외한 나머지 베열을 만듬
        const rest = [...org.slice(0, index), ...org.slice(index + 1)]
        // 나머지 배열과 r - 1 값을 재귀. 
        const permutation = Permutation(rest, r - 1)

        // 재귀가 base case를 만나 끝나면, fixed에 하나씩 붙이면서 올라옴.
        const attached = permutation.map((numbers) => [fixed, ...numbers])
        // [ [ '1', '7' ] ] ==> 첫번쨰 재귀함수 시
        // [ [ '1', '7' ], [ '7', '1' ] ] // ==> 두번째 재귀함수 시
        result.push(...attached) 
    })
    return result
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return num >= 2
}

console.log(solution('17')) // 7, 17, 71 ==> 3
console.log(solution('011')) // 11, 101 ==> 2
console.log(solution('23')) // 2, 3, 23 ==> 3

console.log(solution('77')) // 7 ==> 1
console.log(solution('195')) // 5, 19, 59 ==> 3