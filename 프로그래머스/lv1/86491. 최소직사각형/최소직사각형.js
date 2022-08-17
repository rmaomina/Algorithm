function solution(sizes) {
    let max_x = 0
    let max_y = 0
    
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b)
        for (let j = 0; j < sizes[i].length; j++) {
            if (max_x < sizes[i][0]) {
                max_x = sizes[i][0]
            }
            if (max_y < sizes[i][1]) {
                max_y = sizes[i][1]
            }
        }
    }
    return max_x * max_y
}