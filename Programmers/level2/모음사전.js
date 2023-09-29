function solution(word) {
  const alphabet = ["A", "E", "I", "O", "U"];
  let count = 0;
  let flag = false;

  function DFS(makedWord) {
    if (makedWord === word || flag) {
      flag = true;
      return;
    }
    if (makedWord.length > 5) return;
    count++;
    for (let i = 0; i < alphabet.length; i++) {
      DFS(`${makedWord}${alphabet[i]}`);
    }
  }
  DFS("");
  return count;
}

const word = "EIO";
console.log(solution(word));
