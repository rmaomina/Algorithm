function solution(n, arr1, arr2) {
    let answer = new Array(n).fill('#');
    let arr1Fixed = []
    let arr2Fixed = []
    
    for (let i = 0; i < n; i++) {
        answer[i] = new Array(n).fill('#')
        
        arr1Fixed.push(fillBlank(arr1[i].toString(2), n).split(''))
        arr2Fixed.push(fillBlank(arr2[i].toString(2), n).split(''))
        
        for (let j = 0; j < n; j++) {
            if (arr1Fixed[i][j] === '0' && arr2Fixed[i][j] === '0') {
                answer[i][j] = ' '
            }
        }
    }
    
    console.table(answer)
    
    return answer.map(elem => elem.join(''));
    
}

function fillBlank(string, n) {
    if (string.length === n) return string
    return fillBlank('0' + string, n)
}
