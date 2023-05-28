function solution(num) {
  let answer = [];
  let ch = Array.from({ length: num + 1 }, () => 0);
  function DFS(v) {
    if (v === num + 1) {
      let tmp = "";
      for (let i = 1; i <= num; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
