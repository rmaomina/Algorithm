function solution(nums) {
    let answer = 0

    // 마지막에서 2번째까지 검사해도 모든 경우의 수를 찾을 수 있다. (합이기에)
    for (let i = 0; i < nums.length - 2; i++) {
        // 1 - 2 - 
        for (let j = i + 1; j < nums.length; j++) {
            // 2 - 3 - 3(중복)
            for (let k = j + 1; k < nums.length; k++) {
                // 1,2,3 - 1,2,4 - 1,3,4 - 
                let sum = nums[i] + nums[j] + nums[k] 
                if (isPrime(sum)) answer ++
            }
        }
    }

    return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

console.log(solution([1, 2, 3, 4]))
console.log(solution([1, 2, 7, 6, 4]))