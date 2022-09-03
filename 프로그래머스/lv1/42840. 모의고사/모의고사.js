function solution(answers) {

    const PT = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]

    let result = PT.map((el, idx) => {
        return checkAnswer(answers, el)
    })
    
    let maxVal = Math.max(...result)
    let answer = []
    
    result.filter((el, idx) => {
        if (el === maxVal) answer.push(idx + 1)
    })
    return answer
}

function checkAnswer (arr, pattern) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let ptIdx = i % pattern.length
        if (arr[i] === pattern[ptIdx]) count++
    }
    return count
}