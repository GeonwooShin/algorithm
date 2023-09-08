function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let lt = 0;
  let rt = people.length - 1;

  while (lt <= rt) {
    let sum = people[lt] + people[rt];
    if (sum > limit) {
      rt--;
    } else {
      rt--;
      lt++;
    }
    answer++;
  }
  return answer;
}

const people = [80, 70, 50, 50, 50, 50];
const limit = 120;
console.log(solution(people, limit));
