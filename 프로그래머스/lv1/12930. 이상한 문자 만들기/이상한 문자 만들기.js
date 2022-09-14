function solution(s) {
    let answer = []
    let arr = s.split(' ')
    for (let word of arr) {
        let changed = ''
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) changed += word[i].toUpperCase()
            else changed += word[i].toLowerCase()
        }
        answer.push(changed)
    }
    return answer.join(' ');
}