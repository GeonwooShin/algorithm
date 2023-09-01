function solution(participant, completion) {
  let answer;
  const hash = new Map();
  for (let player of participant) {
    if (hash.get(player)) hash.set(player, hash.get(player) + 1);
    else hash.set(player, 1);
  }
  for (let player of completion) {
    hash.set(player, hash.get(player) - 1);
  }
  hash.forEach((v, k, _) => {
    if (v !== 0) answer = k;
  });
  return answer;
}
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];
solution(participant, completion);
