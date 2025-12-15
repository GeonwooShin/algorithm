// Q.
// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때,
// 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 함수를 완성하세요.
// prices = [1, 2, 3, 2, 3]
// answer = [4, 3, 1, 1, 0]

// queue로 풀이

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

  dequeue() {
    if (this.isEmpty()) return;
    if (!this.head.next) {
      const temp = this.head.value;
      this.head = null;
      this.tail = null;
      return temp;
    }
    const temp = this.head.value;
    this.head = this.head.next;
    return temp;
  }

  isEmpty() {
    return !this.head;
  }
}

const prices = [1, 2, 3, 2, 3];

function solution(prices) {
  const result = [];
  const queue = new Queue();
  for (const price of prices) {
    queue.enqueue(price);
    // head                   tail
    //  1     2     3     2     3
  }

  while (!queue.isEmpty()) {
    const standard = queue.dequeue();
    let current = queue.head;
    let seconds = 0;
    while (current) {
      seconds++;
      if (standard > current.value) {
        break;
      }
      current = current.next;
    }
    result.push(seconds);
  }
  return result;
}

const answer = solution(prices);

console.log(answer);
