function solution(s) {
  const tuple = [];
  const strList = s.replace("{{", "").replace("}}", "").split("},{");
  const setList = [];
  for (let i = 0; i < strList.length; i++) {
    setList.push(strList[i].split(","));
  }
  setList.sort((a, b) => a.length - b.length);
  for (let i = 0; i < setList.length; i++) {
    const arr = setList[i];
    for (let j = 0; j < arr.length; j++) {
      const number = Number(arr[j]);
      if (!tuple.includes(number)) tuple.push(number);
    }
  }
  return tuple;
}

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
console.log(solution(s));
