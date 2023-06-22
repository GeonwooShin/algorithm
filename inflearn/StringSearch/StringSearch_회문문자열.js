function solution(word) {
  let answer;
  let str = "";
  for (let i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  if (word.toLowerCase() === str.toLowerCase()) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}

function solution2(word) {
  let answer = "YES";
  let strLen = word.length;
  word = word.toLowerCase();
  for (let i = 0; i < Math.floor(strLen / 2); i++) {
    if (word[i] !== word[strLen - 1 - i]) {
      return "NO";
    }
  }
  return answer;
}

function solution3(word) {
  let answer = "YES";
  word = word.toLowerCase();
  let reverseWord = word.split("").reverse().join("");
  if (word !== reverseWord) {
    return "NO";
  }
  return answer;
}

let word = "gooG";
console.log(solution(word));
console.log(solution2(word));
console.log(solution3(word));
