function solution(arr1, arr2) {
    
    return arr1.map((el, i) => {
        return el.map((e, j) => {
            return arr1[i][j] + arr2[i][j]
        })
    })

}