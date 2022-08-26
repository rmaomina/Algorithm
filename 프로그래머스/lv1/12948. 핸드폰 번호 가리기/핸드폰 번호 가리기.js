function solution(phone_number) {
    let answer = '';
    let number = phone_number.slice(phone_number.length - 4)
    let masking = phone_number.slice(0, phone_number.length - 4).replace(/./g, '*')
    
    console.log(number)
    console.log(masking)
    
    return masking + number;
}