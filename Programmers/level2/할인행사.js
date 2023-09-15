function solution(want, number, discount) {
  let answer = 0;
  const obj = {};
  const itemNum = number.reduce((a, c) => a + c, 0);
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }
  for (let i = 0; i <= discount.length - itemNum; i++) {
    const items = discount.slice(i, i + itemNum);
    const itemObj = {};
    let flag = true;
    items.forEach((item) => {
      if (itemObj.hasOwnProperty(item)) {
        itemObj[item] += 1;
      } else {
        itemObj[item] = 1;
      }
    });
    for (let i in itemObj) {
      if (itemObj[i] !== obj[i]) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(want, number, discount));
