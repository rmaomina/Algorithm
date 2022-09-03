function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const [from, to, index] = commands[i]

        const target = array.slice(from - 1, to).sort((a,b) => a - b)
        console.log(target)
        
        answer.push(target[index - 1])    
    }
    
    return answer;
}