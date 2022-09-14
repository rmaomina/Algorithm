function solution(nums) {
    const numLen = nums.length
    const setLen = [...new Set(nums)].length
    // 전체의 절반의 수가 setLen(중복을 제거한 횟수)보다 같거나 크다면 
    // set 데이터가 최대. 아니면 numLen을 1/2한 결과가 나온다. 
    return numLen / 2 >= setLen ? setLen : numLen / 2
}