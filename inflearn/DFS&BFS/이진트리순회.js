function solution(n) {
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      // 전위순회 console.log(v)
      DFS(v * 2);
      // 중위순회 console.log(v)
      DFS(v * 2 + 1);
      // 후위순회 console.log(v)
    }
  }
  DFS(n);
}

solution(1);
