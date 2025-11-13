/**
 * 1. Array
 * 원소 탐색 => O(1), 추가 및 제거 => O(N)
 * 새로운 원소를 넣어주기 위해 공긴을 만드려면
 * 새로운 공간을 다시 한번 만들어줘야함
 * 따라서 배열은 원소들을 추가하고 삭제하는 것이 비효율적이 자료구조
 * 보통 배열은 정해진 길이만큼의 입력값을 받은 경우를 더 선호함 => 효율적
 */

/**
 * 2. Linked List
 * 원소 탐색 => O(N), 추가 및 제거 => O(1)
 * 크기가 정해져있지 않은 데이터의 공간
 * 원소를 중간에 삽입 & 삭제하는 경우
 * 앞뒤의 포인터만 변경하면 됨 => O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node("방1");
const secondtNode = new Node("방2");
firstNode.next = secondtNode;

// 위와 같이 하지 않기 위해 LinkedList 클래스가 추가됨

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(value) {
    // data, next를 가지는 새로운 노드 생성
    const newNode = new Node(value);

    if (!this.head) {
      /**
       * 만약 head가 없는 리스트인 경우
       * head에 새로 만든 node가 들어가야함
       */
      this.head = newNode;
    } else {
      /**
       * head 노드가 있다면
       * 현재 노드가 next가 없을때까지 (마지막 노드일때까지) 현재 노드에 다음 노드를 담아주고
       * 먀지막 노드인 경우 next에 추가하려는 node를 달아줌
       */
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
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
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data;
      current = current.next;
    }
    console.log(result);
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

  // index - 1의 next가 value를 가진 node가 되어야 한다
  // 새로운 노드의 next는 index + 1 노드가 되어야 한다
  addNode(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }
    const prevNode = this.getNode(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  removeNode(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const currentNode = this.getNode(index);
      const prevNode = this.getNode(index - 1);
      prevNode.next = currentNode.next;
    }
    this.length--;
  }
}

const CustomLinkedList = new LinkedList();

// CustomLinkedList.append(3);
// CustomLinkedList.append(4);
// CustomLinkedList.append(5);
// CustomLinkedList.append(6);
// CustomLinkedList.addNode(0, 6);
// CustomLinkedList.removeNode(0);
CustomLinkedList.prepend(2);

CustomLinkedList.printAll();
// CustomLinkedList.getNodeValue(2);
