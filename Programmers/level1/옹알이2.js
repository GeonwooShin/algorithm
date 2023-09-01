function solution(babbling) {
  let answer = 0;
  let can = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];
    for (let j = 0; j < can.length; j++) {
      if (word.includes(can[j].repeat(2))) {
        break;
      }
      word = word.split(can[j]).join(" ");
    }
    if (word.split(" ").join("").length === 0) answer++;
  }
  return answer;
}
