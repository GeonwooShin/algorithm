// 스택
// 한 쪽 끝으로만 자료를 넣고 뺼 수 있는 구조
// 가장 최근에 넣은걸 먼저, 예전에 넣은걸 나중에
// 넣은 순서를 쌓아두고 있음

// push: 맨 앞에 데이터 넣기
// pop: 맨 앞의 데이터 뽑기
// peek: 맨 앞의 데이터 보기
// isEmpty: 스택이 비었는지 안비었는지 확인하기

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    if (!this.head) return null;
    const result = this.head;
    this.head = this.head.next;
    return result;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.head === null;
  }
}

const stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
