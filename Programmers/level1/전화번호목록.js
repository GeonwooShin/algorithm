// function solution(phone_book) {
//   let answer = true;
//   const arr = phone_book.sort();
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1].startsWith(arr[i])) answer = false;
//   }
//   return answer;
// }

/** Set 사용하여 구현 */

function solution(phone_book) {
  let answer = true;
  const set = new Set(phone_book);

  for (let phoneNumber of phone_book) {
    for (let i = 1; i < phoneNumber.length; i++) {
      if (set.has(phoneNumber.substring(0, i))) {
        answer = false;
        return answer;
      }
    }
  }

  return answer;
}

const phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book));
