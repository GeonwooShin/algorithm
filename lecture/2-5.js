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

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printAll() {
    let currentNode = this.head;
    let word = "";
    while (currentNode) {
      word += currentNode.value;
      currentNode = currentNode.next;
    }
    console.log(word);
  }

  getNode(index) {
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }
    return current;
  }

  addNode(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentNode === null) {
      throw new Error("Index out of range");
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  removeNode(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      // 1번째 인덱스
      // 1, 3, 4, 5
      // 1, 4, 5
      // 0번째 노드의 next가 2번째 노드가 되어야함
      // n-1 번쨰 노드의 next가 n+1 번쨰 노드가 되어야함
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      currentNode.next = currentNode.next.next;
      this.length--;
    }
  }

  getNodeFromBehind(index) {
    return this.getNode(this.length - index);
  }
}

const list = [6, 7, 8];
const k = 2;

function solution(arr, k) {
  const link = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    link.append(arr[i]);
  }
  return link.getNodeFromBehind(k).value;
}

const answer = solution(list, k);
console.log(answer);
