function solution(survey, choices) {
    
  // 질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 
  // 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어짐.
  // 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return. 
  // 
  let result = '';
  let record = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 }
  let types = ["RT", "CF", "JM", "AN"]
  // survey와 choices의 길이는 같다. 
  // 객체에 각 유형에 대한 점수를 기록하고
  // 더 큰 점수를 받은 유형을 반환하되, 
  // 동일하거나 없으면 알파멧 순으로 출력 

  // 저장된 기록에서 R과 T 비교, C와 F와 비교.. 반복 ..
  const compare = (a, b) => {
    if(record[a] === record[b]) return [a, b].sort()[0]

    if(record[a] > record[b]) {
      return a
    } else {
      return b
    }
  }

  survey.map((elem, idx) => { // elem === "TR"
    if (choices[idx] < 4) {
      record[elem[0]] += (4 - choices[idx]) // 1, 2, 3 이면 각각 3, 2, 1 점을 얻는다. 
    } else if (choices[idx] > 4) {
      record[elem[1]] += (choices[idx] - 4) // 5, 6, 7 이면 각각 1, 2, 3 점을 얻는다. 
    }
    console.log(record)
  })

  types.forEach(el => {
    result += compare(el[0], el[1])
    console.log(result)
  })

  return result;
}

// 라이언형(R), 튜브형(T) / 콘형(C), 프로도형(F) / 제이지형(J), 무지형(M) / 어피치형(A), 네오형(N)
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])) // --> R: 6, T: 1