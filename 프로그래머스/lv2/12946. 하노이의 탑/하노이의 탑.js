function solution(n) {
    
    let result = []
    const hanoi = (num, from, to, other) => {
        if (num === 0) return 

        hanoi(num - 1, from, other, to)
        result.push([from, to])
        hanoi(num - 1, other, to, from )
        return result
    }

    return hanoi(n, 1, 3, 2)
}
