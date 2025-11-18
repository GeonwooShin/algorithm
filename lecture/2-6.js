// Q. 링크드 리스트의 끝에서 K번째 값을 반환하시오.

// [6] -> [7] -> [8] # 이런 링크드 리스트가 입력되었을 때,
//                   # 끝에서 2번째 값은 7을 반환해야 합니다!

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  getNodeFromBehind(index) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < index; i++) {
      fast = fast.next;
    }

    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.value;
  }
}

const list = [6, 7, 8];
const k = 2;

function solution(arr, k) {
  const link = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    link.append(arr[i]);
  }
  return link.getNodeFromBehind(k);
}

const answer = solution(list, k);
console.log(answer);
