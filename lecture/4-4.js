// 큐
// 데이터를 한쪽에서 넣고 다른쪽에서 빼는 구조
// 먼저 들어온 일을 순서대로 처리해야 할 때
// 먼저 해야 하는 일들을 저장하고 싶을 때
// enqueue: 맨 뒤에 데이터를 추가해주는 함수
// dequeue: 맨 앞의 데이터를 뽑는 함수
// peek: 맨 앞의 데이터 보기
// isEmpty: 큐가 비었는지 안 비었는지 여부 확인

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // head        tail
  //   4 - 2 - 1 - 3
  // head     tail
  //   2 - 1 - 3
  dequeue() {
    if (this.isEmpty()) return;
    if (!this.head.next) {
      const result = this.head.value;
      this.head = null;
      this.tail = null;
      return result;
    }
    const result = this.head.value;
    this.head = this.head.next;
    return result;
    // if (!this.head) return;
    // const result = this.head.value;
    //this.head = this.head.next;
    //if (!this.head) this.tail = null;
    // return result;
  }

  peek() {
    if (!this.head) return null;
    return this.head.value;
  }

  isEmpty() {
    return !this.head;
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());
