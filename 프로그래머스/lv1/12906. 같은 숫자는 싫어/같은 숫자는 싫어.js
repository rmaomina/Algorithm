function solution(arr)
{
    let answer = [arr[0]]
    
    arr.reduce((acc, cur) => {
    if (acc !== cur) answer.push(cur)
        return cur
    })
    
    
    return answer;
}