function solution(size, arr) {
  let memory = Array.from({ length: size }, () => 0);
  arr.forEach((ele) => {
    if (memory.includes(ele)) {
      // cache hit일 때
      let idx = memory.indexOf(ele);
      for (let j = idx; j >= 1; j--) {
        memory[j] = memory[j - 1];
      }
    } else {
      // cache miss일 때
      for (let j = size - 1; j >= 1; j--) {
        memory[j] = memory[j - 1];
      }
    }
    memory[0] = ele;
  });
  return memory;
}

const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
