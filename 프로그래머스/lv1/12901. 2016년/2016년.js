function solution(a, b) {

    // 특징은 2일 때, 28, 
    // 그 외에는 1-7까지 짝수 달은 30, 홀수 달은 31
    // 나머지 8-12까지는 짝수 달이 31, 홀수 달은 30
    // 그냥 배열로 처리하면 간단할 듯. 
    const END_OF_MONTH = [, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const DAYS_OF_WEEK = ['SUN', 'MON','TUE','WED','THU','FRI','SAT']
    
    let allDates = 0
    for (let i = 1; i < a; i++) {
        // 만약 달이 1이라면 count하지 않음. 
        // 12부터도 count하지 않음 
        // 12월을 넘어가는 달은 없고, 그 외엔 b에 담기게 되기 때문. 
        allDates += END_OF_MONTH[i]
    }
    allDates += b
    
    let index = ((allDates + 5 - 1) % 7)
    
    return DAYS_OF_WEEK[index]
    
}