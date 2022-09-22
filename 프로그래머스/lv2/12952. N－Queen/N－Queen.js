function solution(n) {
    let answer = 0;
    const col = new Array(n + 1).fill(0)
    
    const nQueen = (i, col) => {
        let m = col.length - 1
        if (promising(i, col)) {
            if (m === i) {
                console.log(col.slice(1, col.length))
            } else {
                for (let j = 1; j < m + 1; j++) {
                    col[i + 1] = j
                    nQueen(i + 1, col)
                }
            }
        } 
    }
    
    const promising = (i, col) => {
        let k = 1
        let flag = true
        while (k < i && flag) {
            if (col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k) {
                flag = false
            }
        }
        return flag
    }
    
    nQueen(0, col)
    
    return answer;
}