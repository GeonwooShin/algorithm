/* 시간 초과 */
// function solution(topping) {
//   let answer = 0;
//   for (let i = 0; i < topping.length - 1; i++) {
//     const personA = topping.slice(0, i + 1);
//     const personB = topping.slice(i + 1);
//     const setA = new Set(personA);
//     const setB = new Set(personB);
//     if (setA.size === setB.size) answer++;
//   }
//   return answer;
// }

// const topping = [1, 2, 1, 3, 1, 4, 1, 2];
// console.log(solution(topping));

function solution(topping) {
  let answer = 0;
  const map = new Map();
  const bro = new Set();

  for (let i = 0; i < topping.length; i++) {
    map.has(topping[i])
      ? map.set(topping[i], map.get(topping[i]) + 1)
      : map.set(topping[i], 1);
  }

  for (let i = 0; i < topping.length; i++) {
    let count = map.get(topping[i]) - 1;
    bro.add(topping[i]);
    count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
    if (bro.size === map.size) answer++;
  }
  return answer;
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));
