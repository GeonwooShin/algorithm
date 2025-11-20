// 주문한 메뉴가 손님에게 나올수 있으면 true
// 나올수없으면 false를 반환하라

const menus = ["떡볶이", "만두", "오뎅", "사이다", "콜라"];
const orders = ["오뎅", "콜라", "만두", "콜팝"];

function solution1(menus, orders) {
  const menu = menus.sort(); // O(NlogN)

  const isPossible = (arr, target) => {
    let lt = 0;
    let rt = arr.length;
    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      if (arr[mid] === target) return true;
      if (arr[mid] < target) lt = mid + 1;
      else rt = mid - 1;
    }
  };

  for (const order of orders) {
    // O(M)
    if (!isPossible(menu, order)) return false; // O(logN)
  }

  return true;
}

function solution2(menus, orders) {
  let result = true;
  const set = new Set();
  for (const menu of menus) {
    // O(N)
    if (!set.has(menu)) set.add(menu);
  }
  for (const order of orders) {
    // O(M)
    if (set.has(order)) result = true; // O(1)
    else {
      result = false;
      break;
    }
  }
  return result;
}

const answer1 = solution1(menus, orders); // O((N+M)logN)
const answer2 = solution2(menus, orders); // O(N+M)
console.log(answer1);
console.log(answer2);
