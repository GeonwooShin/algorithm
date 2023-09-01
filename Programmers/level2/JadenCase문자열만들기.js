function solution(s) {
  const arr = s.split(" ").map((str) => {
    let word = "";
    for (let i = 0; i < str.length; i++) {
      if (i === 0) word += str[i].toUpperCase();
      else word += str[i].toLowerCase();
    }
    return word;
  });
  return arr.join(" ");
}

const s = "3people unFollowed me";
console.log(solution(s));
