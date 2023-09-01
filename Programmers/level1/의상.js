function solution(clothes) {
  const obj = {};
  let answer = 1;
  clothes.forEach((cloth) => {
    const [name, type] = cloth;
    if (obj[type]) obj[type] += 1;
    else obj[type] = 1;
  });
  for (const key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}
