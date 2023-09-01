function solution(players, callings) {
  const obj = {};
  players.forEach((player, idx) => {
    obj[player] = idx;
  });
  callings.forEach((player) => {
    // player = kai
    const rank = obj[player]; // 3
    const temp = players[rank - 1]; // poe
    players[rank - 1] = player; // 2 - kai
    players[rank] = temp; // 3 - poe

    obj[player] = rank - 1;
    obj[temp] = rank;
  });
  return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

console.log(solution(players, callings));
