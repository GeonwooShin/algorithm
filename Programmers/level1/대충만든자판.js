function solution(keymap, targets) {
  let answer = [];
  const map = new Map();
  keymap.forEach((key) => {
    for (let i = 0; i < key.length; i++) {
      if (map.has(key[i])) {
        if (map.get(key[i]) > i + 1) map.set(key[i], i + 1);
      } else {
        map.set(key[i], i + 1);
      }
    }
  });
  targets.forEach((target) => {
    let flag = false;
    let typing = 0;
    for (let i = 0; i < target.length; i++) {
      if (map.get(target[i])) {
        typing += map.get(target[i]);
      } else {
        answer.push(-1);
        flag = true;
        break;
      }
    }
    if (!flag && typing !== 0) answer.push(typing);
  });
  return answer;
}

const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCDH", "AABB"];
console.log(solution(keymap, targets));
