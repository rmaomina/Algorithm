function solution(arr) {
    let answer = [];
    
    if (arr.length === 1) {
        return [-1]
    }
    
    let smallest = arr[0]
    for(let elem of arr) {
        if (elem < smallest) {
            smallest = elem
        }
    }
    
    answer = arr.filter((v) => smallest !== v)
    
    return answer;
}