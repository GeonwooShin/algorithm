function solution(phone_book) {
  let answer = true;
  const arr = phone_book.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].startsWith(arr[i])) answer = false;
  }
  return answer;
}
