function solution(citations) {
  citations.sort((a, b) => b - a);

  let answers = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answers++;
    }
  }

  return answers;
}

const citations = [9, 9, 9, 9, 1];
console.log(solution(citations));
