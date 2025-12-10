// 간단 큐 구현

const queue = [];
let head = 0;

queue.push(5); // enqueue
queue.push(6); // enqueue
queue.push(1); // enqueue
const x = queue[head++]; // dequeue
const y = queue[head++]; // dequeue
const z = queue[head++]; // dequeue

console.log(z);
