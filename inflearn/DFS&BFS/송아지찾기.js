function solution(S, E) {
  const distance = Array.from(Array(E + 1), () => 0);
  const ch = Array.from(Array(E + 1), () => 0);
  const queue = [S];
  ch[S] = 1;
  while (queue.length) {
    const location = queue.shift();
    for (let move of [location - 1, location + 1, location + 5]) {
      if (move === E) return distance[location] + 1;
      if (move > 0 && move <= 10000 && ch[move] === 0) {
        ch[move] = 1;
        queue.push(move);
        distance[move] = distance[location] + 1;
      }
    }
  }
}

const S = 5;
const E = 14;

console.log(solution(S, E));
