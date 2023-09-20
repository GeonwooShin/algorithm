function solution(priorities, location) {
  let answer = [];
  let arr = Array.from({ length: priorities.length }, (v, i) => i);
  while (priorities.length > 0) {
    const priority = priorities.shift();
    const arrItem = arr.shift();
    if (priorities.filter((item) => item > priority).length) {
      priorities.push(priority);
      arr.push(arrItem);
    } else {
      answer.push(arrItem);
    }
  }
  return answer.indexOf(location) + 1;
}

const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
