function solution(elements) {
  elements = [...elements, ...elements];
  const arr = [];
  for (let i = 0; i < elements.length / 2; i++) {
    for (let j = i; j < i + elements.length / 2; j++) {
      const elementsArr = elements.slice(i, j + 1);
      arr.push(elementsArr.reduce((a, c) => a + c, 0));
    }
  }
  const set = new Set(arr);
  const answer = set.size;
  return answer;
}

const elements = [7, 9, 1, 1, 4];

console.log(solution(elements));
