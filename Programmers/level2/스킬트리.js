function solution(skill, skill_trees) {
  let answer = 0;
  const possible = [];
  const regex = new RegExp(`[${skill}]`, "g");
  for (let i = 0; i < skill.length; i++) {
    possible.push(skill.slice(0, i + 1));
  }
  for (let skillSet of skill_trees) {
    const result = skillSet.match(regex);
    if (result !== null) {
      if (possible.includes(result.join(""))) answer++;
    } else answer++;
  }
  return answer;
}

const skill = "CBD"; // C, CB, CBD
const skill_trees = ["AEF", "ZJW"];

console.log(solution(skill, skill_trees));

// [2, 0, 3] // x
// [0, 1, 3] // o
// [0, 1, -1] // o
// [-1, 0, 1] // x
