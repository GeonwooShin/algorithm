// Q. 다음과 같이 영어로 되어 있는 문자열이 있을 때
// 이 문자열에서 반복되지 않는 첫번째 문자를 반환하시오

// 만약 그런 문자가 없다면 _ 를 반환하시오.

// "abadabac" # 반복되지 않는 문자는 d, c 가 있지만 "첫번째" 문자니까 d를 반환해주면 됩니다!

// print("정답 = d 현재 풀이 값 =", result("abadabac"))
// print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
// print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))

function solution(word) {
  const map = new Map();
  for (let i = 0; i < word.length; i++) {
    if (map.has(word[i])) {
      map.set(word[i], map.get(word[i]) + 1);
    } else {
      map.set(word[i], 1);
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (map.get(word[i]) === 1) {
      return word[i];
    }
  }

  return "_";
}

const answer1 = solution("abadabac");
const answer2 = solution("aabbcddd");
const answer3 = solution("aaaaaaaa");

console.log(answer1);
console.log(answer2);
console.log(answer3);
