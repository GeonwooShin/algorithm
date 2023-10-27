function solution(S, E) {
  const MAX_COUNT = 10000;
  const distance = Array.from(Array(MAX_COUNT + 1), () => 0);
  const ch = Array.from(Array(MAX_COUNT + 1), () => 0);
  const queue = [S];
  while (queue.length) {
    const location = queue.shift();
    if (ch[location]) continue;
    ch[location] = 1;
    for (let move of [location - 1, location + 1, location + 5]) {
      if (move === E) return distance[location] + 1;
      if (move > 0 && move <= MAX_COUNT) {
        queue.push(move);
        distance[move] = distance[location] + 1;
      }
    }
  }
}

const S = 8;
const E = 3;

console.log(solution(S, E));
