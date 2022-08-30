function solution(n) {
    let answer = [];
    
    console.log(n)
    let three = n.toString(3)
    
    console.log(three)
    let reversed = three.split('').reverse().join('')
    
    return parseInt(reversed, 3)
}