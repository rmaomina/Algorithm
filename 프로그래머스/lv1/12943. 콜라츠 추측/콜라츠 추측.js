function solution(num) {

    let count = 0
    
    while (true) {
        if (count > 500) return -1
        if (num === 1) break
        
        if (num % 2 === 0) {
            num /= 2
        } else {
            num = (num * 3) + 1
        }
        
        count ++
    }
    
    return count
}