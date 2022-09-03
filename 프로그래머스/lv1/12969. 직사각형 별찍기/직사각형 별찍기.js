process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    let answer = ''
    for (let i = 0; i < Number(m); i++) {
        for (let j = 0; j < Number(n); j++) {
            answer += '*'
        }
        answer += '\n'
    }
    console.log(answer)
});