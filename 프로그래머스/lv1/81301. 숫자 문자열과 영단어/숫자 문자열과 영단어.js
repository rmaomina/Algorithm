function solution(s) {
    let answer = 0;
    // 영단어 10개를 모두 반복해서 해당 영단어를 숫자로 변환하면 된다. 
    // (replace는 안된다. 모든 단어의 regEx다 체크해야하니까)
    // 두개가 나오면? one2one34threetwo
    // one으로 자르면 ['', '2', '34threetwo'] 나눠진 부분에 숫자로 치환된 단어가 들어간다. 
    // let table = {
    //     "0":"zero",
    //     "1": "one",
    //     "2":
    // }
    // table을 객체로 하기엔 유사배열같지 않나? 그냥 배열로 하자. 
    
    const table = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    for (let i = 0; i < table.length; i++) {
        s = s.split(table[i]).join(i)
    }
    answer = Number(s)
    return answer;
}