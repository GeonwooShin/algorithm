function solution(k, tangerine) {
  let answer = 0;
  const obj = {};
  tangerine.forEach((v) => {
    if (obj.hasOwnProperty(v)) obj[v] += 1;
    else obj[v] = 1;
  });
  const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    const [size, num] = arr[i];
    k -= num;
    answer++;
    if (k <= 0) break;
  }
  return answer;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));
