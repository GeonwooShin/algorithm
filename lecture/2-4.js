// 회문은 똑바로 읽으나 거꾸로 읽으나 똑같은 단어나 문장을 의미합니다.

// 역삼역
// 기러기

// solution("토마토")   # True
// solution("") # False
// solution("abcba")  # True

function solution(str) {
  const len = str.length;
  if (str[0] !== str[len - 1]) return "False";
  if (str.length <= 1) return "True";
  return solution(str.substring(1, str.length - 1));
}

const answer = solution("토마토마");
console.log(answer);
